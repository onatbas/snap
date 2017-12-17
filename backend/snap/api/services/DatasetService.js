var request = require("request");
var http = require("http");

var queueWorking = false;

function getDatasets(options){
    return new Promise((resolve, reject)=>{
        sails.models.dataset.find({
            skip: options.begin, 
            limit: options.end-options.begin
        }).exec((err, list)=>{
            if (err) reject(err);

            resolve(list);
        });
    });
}

function getDatasetCount(){
    return new Promise((resolve)=>{
        sails.models.dataset.count().exec((err, count)=>{
            resolve(count)
        });
    });
}

function getFirstFromQueue(){
    if (queueWorking)
        return;

    queueWorking = true;
    sails.models.queue.find({limit: 1}).exec((err, items)=>{

        if (items && items.length > 0)
        {
            const item = items[0];
            addToList(item).then(()=>{
                sails.models.queue.destroy({id: item.id}).exec(()=>{
                    queueWorking = false;
                    console.log("Got item " + item.id);
                    getFirstFromQueue();
                });
            });
        }else{
            queueWorking = false;
            getFirstFromQueue();
        }
    });

}

function addToQueue(options) {
    sails.models.dataset.find({where: { id: options.id }}).exec((err, list) => {
        if (!err && (!list || list.length == 0)) {
            sails.models.queue.findOrCreate({id: options.id}).exec((err, result)=>{
                
                getFirstFromQueue();
            });

        }
    });
}

function addToList(opts) {
    return new Promise((accept, rej) => {

        var request = require("request");

        var options = {
            method: 'POST',
            url: 'https://data.europa.eu/euodp/data/api/action/package_show',
            headers:
                {
                    'postman-token': '4e9f674c-e15b-11cc-6363-e2cf06b8aa22',
                    'cache-control': 'no-cache',
                    'user-agent': 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:12.0) Gecko/20100101 Firefox/21.0',
                    'content-type': 'application/json'
                },
            body: { id: opts.id },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) rej(error);

            const result = body.result;
            var dataObject = {
                id: result.name,
                name: result.name,
                contact_email: result.contact_email,
                contact_name: result.contact_name,
                title: result.title,
                description: result.description,
                modified_date: result.metadata_modified,
                license_id: result.license_id,
                license_title: result.license_title,
                license_url: result.license_url,
                url: result.url
            };

            sails.models.dataset.findOrCreate(dataObject).exec((err, item)=>{
                if (err) rej(err);
                accept(item);
            });
        });
    });
}


function fillInList(options) {

    return new Promise((accept, rej) => {
        var options = {
            method: 'POST',
            url: 'https://data.europa.eu/euodp/data/api/action/package_list',
            headers:
                {
                    'postman-token': '74f9e3d6-7718-cef8-adc4-2f5fcb0e06ee',
                    'cache-control': 'no-cache',
                    'user-agent': 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:12.0) Gecko/20100101 Firefox/21.0',
                    'content-type': 'application/json'
                },
            body: {},
            json: true
        };

        request(options, function (error, response, body) {
            if (error) rej(error);


            const ids = body.result;
            ids.forEach(element => {
                addToQueue({ id: element });
            });

            accept(body);
        });
    });
}

function searchFor(options){
    return new Promise((resolve)=>{

        var orpairs = [];
        var fields =  [
        'id',
        'name',
        'contact_email',
        'contact_name',
        'title',
        'description',
        'modified_date',
        'license_id',
        'license_title',
        'license_url',
        'url']
        options.keywords.forEach((element)=>{
            fields.forEach(key=>{
                var obj = {};
                obj[key] = {'contains' : element};
                orpairs.push(obj);
            });
        });
        
        sails.models.dataset.find({
            or: orpairs
        }).exec((err, list)=>{
            resolve(list);
        });
    });
}

module.exports = {

    addToList: addToList,
    addToQueue: addToQueue,
    fillInList: fillInList,
    getFirstFromQueue: getFirstFromQueue,
    getDatasets: getDatasets,
    getDatasetCount: getDatasetCount,
    searchFor: searchFor

}
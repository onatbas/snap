function getDatasets(req, res){
    const params = req.params;

    const page = parseInt(params.page);
    const count = parseInt(params.count);


    const begin = page*count;
    const end = (page+1)*count;

    DatasetService.getDatasets({
        begin: begin,
        end: end
    }).then((list)=>{
        res.status(200).send(list);
    });
}

function getDatasetCount(req, res){
    DatasetService.getDatasetCount().then((count)=>{
        console.log(count);
        res.status(200).send({count: count});
    });
}

module.exports = {
    getDatasets: getDatasets,
    getDatasetCount: getDatasetCount
}
var request = require("request");
var http = require("http");


module.exports = {

    addToList: function (options) {
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
            body: { id: '00nlSr3zHd3S6PiCskoXg' },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) rej(error);

            accept(body);
        });

    });

    }
    ,
    fillInList: function (options) {

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

                accept(body);
            });


        });
    }
}
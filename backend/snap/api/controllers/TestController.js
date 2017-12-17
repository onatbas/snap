/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	test1: (req, res)=>{

        setTimeout(DatasetService.getFirstFromQueue, 10);
        res.status(200).send("ok");
    },
	test2: (req, res)=>{

        DatasetService.fillInList().then((result)=>{

            res.status(200).send(result);

        });
    }
};


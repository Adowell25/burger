var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

// create all routes and set up logic within them
// get all burgers

router.get("/", function (req, res) {
    burger.all(function (data){
        console.log(data);
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
})

// router.post("/api/burgers", function (req, res){
//     console.log(req.body);
//     burger.create([req.body.burger_name], function (result){
//         res.status(200)
//         .json({id: result.insertId})
//     })
// })

router.post("/api/burger", (req, res) => {
    var newBurger = req.body.name;

    burger.create("burger_name", newBurger, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

router.put("/api/burgers/:id", (req, res) => {
    var status = Boolean(req.body.devoured);

    burger.update("devoured", status, "id", req.params.id, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

// Exports routes for server.js to use
module.exports = router;
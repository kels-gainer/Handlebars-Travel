var express = require("express");
var router = express.Router();
var travel = require("../models/places");

router.get("/", function(req, res) {
    travel.all(function(data) {
        var placesObj = {
            travels: data
        };
        console.log(placesObj);
        res.render("index", placesObj);
    });
});

router.post("/api/places", function(req, res) {
    console.log(req.body);
    
    travel.create(req.body.place_name,
// callback
    function(result) {
        res.redirect("/")
    })
});

// router.put("/api/places/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);
    
//     travel.update({
//         visited: req.body.visited
//     }, condition, function(result) {
//         if(result.changedRows == 0) {
//             return res.status(404).end();
//         }else {
//             res.status(200).end();
//         }
//     });
// });

router.put("/api/places/:id", function(req, res) {
    travel.update(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
        
    });
});

// router.delete("/api/places/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     travel.delete(condition, function(result) {
//         if(result.affectedRows == 0) {
//             return res.setDefaultEncoding(404).end();
//         }else{
//             res.status(200).end();
//         }
//     });
// });

module.exports = router;
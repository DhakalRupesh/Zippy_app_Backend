const express = require('express');
const Ride = require('../model/ride');
const router = express.Router();
const auth = require("../auth");

router.route('/')
    .get((req, res, next)=>{
        Ride.find({})
        .then((ride)=>{
            res.json(ride);
        })
        .catch(next);
    })
    .post((req, res, next)=>{
        Ride.create(req.body)
        .then((ride)=>{
            res.statusCodes = 201;
            res.json(ride);
        })
        .catch(next);
    })
    .put((req, res) => {
        res.statusCode = 405;
        res.json({message : "This method is not allowed"});
    })
module.exports = router;
const express = require('express');
const Advertise = require('../model/advertise');
const router = express.Router();
const auth = require("../auth");

router.route('/')
    .get((req, res, next)=>{
        Advertise.find({})
        .then((ride)=>{
            res.json(ride);
        })
        .catch(next);
    })
    .post((req, res, next)=>{
        Advertise.create(req.body, req.body.ad_image)
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
const express = require('express');
const Deliver = require('../model/deliver');
const router = express.Router();

router.route('/')
    .get((req, res, next)=>{
        Deliver.find({})
        .then((ride)=>{
            res.json(ride);
        })
        .catch(next);
    })
    .post((req, res, next)=>{
        Deliver.create(req.body)
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
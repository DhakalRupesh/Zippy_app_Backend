const express = require('express');
const Deliver = require('../model/deliver');
const router = express.Router();

router.route('/')
    .get((req, res, next)=>{
        Deliver.find({})
        .then((deliver)=>{
            res.json(deliver);
        })
        .catch(next);
    })
    .post((req, res, next)=>{
        Deliver.create(req.body)
        .then((deliver)=>{
            res.statusCodes = 201;
            res.json(deliver);
        })
        .catch(next);
    })
    .put((req, res) => {
        res.statusCode = 405;
        res.json({message : "This method is not allowed"});
    })

router.route('/:id')
.get((req, res, next)=>{
    Deliver.findOne({ postedby: req.user._id })
    .then((deliver) => {
        if (deliver == null) throw new Error("delivery not found!")
        res.json(deliver);
    }).catch(next);
})

module.exports = router;
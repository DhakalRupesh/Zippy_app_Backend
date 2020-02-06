const express = require('express');
const Advertise = require('../model/advertise');
const router = express.Router();
const auth = require("../auth");

router.route('/')
    .get((req, res, next)=>{
        // if(req.authenticated === true) {
        //     Advertise.find({}).then((advertise)=>res.json(advertise)).catch(next); 
        //   } else {
            
        //   }
        Advertise.find({})   
        // .populate({
        //     path: 'postedby',
        //     select: 'username'
        // })
        .then((advertise)=>{
            res.json(advertise);
        })
        .catch(next);
    })
    .post((req, res, next)=>{
        Advertise.create(req.body, req.body.ad_image)
        .then((advertise)=>{
            res.statusCodes = 201;
            res.json(advertise);
        })
        .catch(next);
    })
    .put((req, res) => {
        res.statusCode = 405;
        res.json({message : "This method is not allowed"});
    })

router.route('/:id')
    .get((req, res, next)=>{
        Advertise.findOne({ postedby: req.user._id })
        .then((advertise) => {
            if (advertise == null) throw new Error("advertise not found!")
            res.json(advertise);
        }).catch(next);
    })
    .post((req, res) => {
        res.statusCode = 405;
        res.json({ message: "Method not allowed" });
    })
    .put((req, res, next) => {
        Advertise.findOneAndUpdate({ postedby: req.user._id, _id: req.params.id }, { $set: req.body }, { new: true })
            .then((reply) => {
                if (reply == null) throw new Error("Task not found!");
                res.json(reply);
            }).catch(next);
    })
    .delete((req, res, next) => {
        Advertise.findOneAndDelete({ postedby: req.user._id, _id: req.params.id })
            .then((advertise) => {
                if (advertise == null) throw new Error("advertise not found!");
                res.json(advertise);
            }).catch(next);
    });
module.exports = router;
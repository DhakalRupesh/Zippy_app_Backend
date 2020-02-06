const express = require('express');
const Vehicle = require('../model/velicles');
const router = express.Router();

router.route('/')
    .get((req, res, next)=>{
        Vehicle.find({}).populate({
            path: "User"
        })
        .then((ride)=>{
            res.json(ride);
        })
        .catch(next);
    })
    .post((req, res, next)=>{
        Vehicle.create(req.body, req.body.license_Image)
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


router.route('/:id')
    .get((req, res, next)=>{
        Vehicle.findById(req.params.id)
        .then((vehicle)=>{
            if(vehicle == null) throw new Error("Vehicle not found")
            res.json(vehicle)
        })
        .catch(next)
    })
    .post((req, res, next)=>{
        res.statusCode = 405;
        res.send({message : "this method is not supported"});
    })
    .put((req, res, next)=>{
        Vehicle.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        .then((vehicle)=>{
            res.json(vehicle)
        })
        .catch(next)
    })

module.exports = router;
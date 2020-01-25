const express = require('express');
const Vehicle = require('../model/velicles');
const router = express.Router();

router.route('/')
    .get((res, next)=>{
        Vehicle.find({})
            .then((vehicle)=>{
                res.json(vehicle);
            })
            .catch(next);
    })
    .post((req, res, next)=>{
        Vehicle.create(req.body)
            .then((vehicle)=>{
                res.statusCode = 201;
                res.json(vehicle);
            })
            .catch(next);
    })
    .put((req, res)=>{
        res.statusCode = 405;
        res.json({ message: "Method not allowed" });
    })
    // .delete(auth.verifyAdmin, (req, res, next) => {
    //     Vehicle.deleteMany({})
    //         .then((reply) => {
    //             res.json(reply);
    //         })
    //         .catch(next)
    // });

router.route('/:id')
    .get((req, res, next)=>{
        Vehicle.findById(req.params.id)
        .then((vehicle)=>{
            if(vehicle == null) throw new Error("Vehicle not found")
            res.json(categories)
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
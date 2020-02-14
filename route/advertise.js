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
        .populate({
            path: 'postedby'
        })
        .populate({path: 'postedby',
            populate: {
                path:'vehicleOfUser',
                model:'Vehicle'
            }
            })
        .then((advertise)=>{
            res.json(advertise);
        })
        .catch(next);
    })
    .post((req, res, next)=>{
        Advertise.create(req.body)
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

router.route('/myAdvertise')
.get(auth.verifyUser,(req,res,next)=>{
    Advertise.find({postedby:req.user._id})
        .populate({path:'postedby'})
        .populate({path:'acceptedby'})
        .populate({path:'postedby',
                populate:{
                    path:'vehicleOfUser',
                    model:'Vehicle'
                }})
        .populate({path:'acceptedby',
                populate:{
                    path:'vehicleOfUser',
                    model:'Vehicle'
                }})
    .then(adv=>{
        res.json(adv);
    })
})

router.route('/:id')
    .get((req, res, next)=>{
        Advertise.findOne({ _id: req.params.id })
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
        Advertise.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
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

// router.route("/myAdvertise") 
//     .get(auth.verifyUser, (req, res, next) => {
//         Advertise.find({ postedby: req.user._id })
//         .populate({'path':'postedby'})
//         .then((advertise)=>{
//             if(advertise == null) throw new Error("No advertisemant found");
//             res.json(advertise);
//         })
//     })
module.exports = router;
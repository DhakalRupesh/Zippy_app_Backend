const express = require('express');
const user = require('../model/adminUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const auth = require('../adminauth');

router.get('/users', (req, res, next)=>{
    user.find({})
    .then((heros)=>{
        res.json(heros);
    }).catch(next);
});

router.post('/register', (req, res, next)=>{
    let password = req.body.password;
    bcrypt.hash(password, 10, function(err, hash){
        if (err) {
            throw new Error('Could not hash!!')
        }user.create({
            fname: req.body.fname,
            lname: req.body.lname,
            mobile: req.body.mobile,
            email: req.body.email,
            username: req.body.username,
            password: hash,
        }).then((user)=>{
            let token = jwt.sign({ _id: user._id}, process.env.SECRET)
            res.json({ status: "Signup success", user: user._id, token:token});
        }).catch(next);
    });
});

router.post('/login', (req, res, next) => {
    user.findOne({ username: req.body.username })
        .then((user)=>{
            if(user == null) {
                let err = new Error('User not found!');
                err.status = 401;
                return next(err);
            } else {
                bcrypt.compare(req.body.password, user.password)
                .then((isMatch)=>{
                    if(!isMatch) {
                        let err = new Error('Username or password didnot match');
                        err.status = 401;
                        return next(err);
                    }
                    let token = jwt.sign({_id: user._id}, process.env.SECRET);
                    res.json({ status: 'Login success!', token: token, utype: user.utype});

                }).catch(next);
            }
    }).catch(next);
})

router.get('/retriveme', auth.verifyUser, (req, res, next)=> {
    res.json
    ({
        _id: req.user._id, 
        fname: req.user.fname, 
        lname: req.user.lname, 
        mobile: req.user.mobile, 
        email: req.user.mobile, 
        username: req.user.username, 
    })
});

router.put('/updateme', auth.verifyUser, (req, res, next)=>{
    user.findByIdAndUpdate(req.user._id,  { $set: req.body }, { new: true })
        .then((user)=>{
            res.json
            ({
                _id: user._id, 
                fname: user.fname, 
                lname: user.lname, 
                mobile: user.mobile, 
                email: user.mobile, 
                username: user.mobile
            })
        }).catch(next);
});

module.exports = router;

// const express = require('express');
// const adminUser = require('../model/adminUser');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const router = express.Router();
// const adminAuth = require('../adminauth');

// router.post('/register', (req, res, next)=>{
//     let password = req.body.password;
//     bcrypt.hash(password, 10, function(err, hash){
//         if (err) {
//             throw new Error('Could not hash!!')
//         }adminUser.create({
//             fname: req.body.fname,
//             lname: req.body.lname,
//             mobile: req.body.mobile,
//             email: req.body.email,
//             username: req.body.username,
//             password: hash,
//         }).then((user)=>{
//             let token = jwt.sign({ _id: user._id}, process.env.SECRET)
//             res.json({ status: "Signup success", user: user._id, token:token});
//         }).catch(next);
//     });
// });

// router.post('/loginadmin', (req, res, next) => {
//     adminUser.findOne({ username: req.body.username })
//         .then((user)=>{
//             if(user == null) {
//                 let err = new Error('User not found!');
//                 err.status = 401;
//                 return next(err);
//             } else {
//                 bcrypt.compare(req.body.password, user.password)
//                     .then((isMatch)=>{
//                         if(!isMatch) {
//                             let err = new Error('Username or password didnot match');
//                             err.status = 401;
//                             return next(err);
//                         }
//                         let token = jwt.sign({_id: user._id}, process.env.SECRET);
//                         res.json({ status: 'Login success!', token: token });

//                     }).catch(next);
//             }
//         }).catch(next);
// });
// router.get('/retriveadminme', adminAuth.verifyUser, (req, res, next)=> {
//     console.log(req.adminUser);
//     res.json({_id: req.adminUser._id, fname: req.adminUser.fname, lname: req.adminUser.lname, mobile: req.adminUser.mobile, email: req.adminUser.mobile, username: req.adminUser.mobile })
// });

// router.put('/updateadminme', adminAuth.verifyUser, (req, res, next)=>{
//     adminUser.findByIdAndUpdate(req.user._id,  { $set: req.body }, { new: true })
//         .then((user)=>{
//             res.json({_id: adminUser._id, fname: adminUser.fname, lname: adminUser.lname, mobile: adminUser.mobile, email: adminUser.mobile, username: adminUser.mobile})
//         }).catch(next);
// });
// module.exports = router;
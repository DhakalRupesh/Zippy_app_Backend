const jwt = require('jsonwebtoken');
const User = require('./model/adminUser');

module.exports.verifyUser = (req, res, next) => {
    let authHeader = req.headers.authorization;
    if(!authHeader){
        let err = new Error("Bearer token is not set!");
        err.status = 401;
        return next(err);
    }
    let token = authHeader.split(' ')[1];
    let data;
    try {
        data = jwt.verify(token, process.env.SECRET);
    } catch (err) {
        throw new Error('Token could not be verified!');
    }
    User.findById(data._id)
    .then((user)=>{
        req.user = user;
        next();
    })
}

module.exports.verifyAdmin = (req, res, next) => {
    if (!req.user) {
        let err = new Error('Unauthorized');
        err.status = 401;
        return next(err);
    }
    if (req.user.utype !== true) {
        let err = new Error('Forbidden');
        err.status = 403;
        return next(err);
    }
    next();
}
// const adminUser = require('./model/adminUser');
// const jwt = require('jsonwebtoken');

// module.exports.verifyUser = (req, res, next) => {
//     let authHeader = req.headers.authorization;
//     if(!authHeader) {
//         let err = new Error("Bearer token not set");
//         err.status = 401;
//         return next(err);
//     }
//     let token = authHeader.split(' ')[1];
//     let data;
//     try {
//         data = jwt.verify(token, process.env.SECRET);
//     } catch(err) {
//         throw new Error("Token could not be verified");
//     }
//     adminUser.findById(data._id)
//     .then((adminUser)=>{
//         req.adminUser = adminUser;
//         next();
//     })

//     req.userId = data._id;
//     next();
//     let auth = new Buffer.from(authHeader.split(' ')[1], "base64")
//         .toString().split(":");
//     adminUser.findOne({ username: auth[0] })
//      .then((user) => {
//         if(user === null){
//             let err = new Error("Username does not exists")
//             err.status = 403;
//             return next(err);
//         }else if (user.password !== auth[1]){
//             let err = new Error("Password does not match")
//             err.status = 403;
//             return next(err);
//         }
//         req.user = user;
//         next();
//     }).catch(next) 
// }
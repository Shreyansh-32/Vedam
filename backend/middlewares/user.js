const jwt = require('jsonwebtoken');
require("dotenv").config();

function userMiddleware(req , res , next){

    const token = req.headers.token;
    console.log(token);

    try{
        const decoded = jwt.verify(token , process.env.JWT_USER_PASSWORD);

        if(decoded){
            next();
        }
        else{
            res.status(403).json({
                "message" : "You're not currently signed in"
            });
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            "message" : "Internal server error"
        });
    }

}

function userIdMiddleware(req , res , next){
    const token = req.headers.token;
    try{
        if(token){
            const decoded = jwt.decode(token , process.env.JWT_USER_PASSWORD);
            req.userId = decoded.id;
            next();
        }
        else{
            res.status(403).json({"message" : "User is not signed in"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({"message" : "Internal server error"});
    }
}

module.exports = {
    userMiddleware : userMiddleware,
    userIdMiddleware : userIdMiddleware
}
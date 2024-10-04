const jwt = require('jsonwebtoken');
require("dotenv").config();

function userMiddleware(req , res , next){

    const token = req.headers.token;

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
        res.status(500).json({
            "message" : "Internal server error"
        });
    }

}

module.exports = {
    userMiddleware : userMiddleware
}
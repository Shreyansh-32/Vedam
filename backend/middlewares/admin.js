const jwt = require('jsonwebtoken');
require("dotenv").config();

function adminMiddleware(req , res , next){

    let token = null;
    if(req.headers.token){
        token = req.headers.token;
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_ADMIN_PASSWORD);

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
    adminMiddleware : adminMiddleware
}
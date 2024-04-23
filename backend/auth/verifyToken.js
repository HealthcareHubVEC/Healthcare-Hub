import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";


export const authenticate = async (req, res, next) => {

    // get token from headers
    const authToken = req.headers.authorization;

    //check token is exists
    if(!authToken || !authToken.startsWith('Bearer ')){
        return res.status(401).json({success:false, message:'No token, authorization denied'});
    }

    try {
        const token = authToken.split(" ")[1];

        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.userId = decoded.id;
        req.role = decoded.role;

        next();// must be call the next function
    } catch (err) {
        if(err.name === 'TokenExpiredError'){
            return res.status(401).json({message:"Token is expired"});
        }

        return res.status(401).json({success:false, message:"Invalid token"});
    }
};

export const restrict = roles => async (req, res, next) => {
    const userId = req.userId;

    try {
        let user = await User.findById(userId);
        if (!user) {
            user = await Doctor.findById(userId);
        }

        // If no user or doctor is found with the userId
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Check if the found user's role is allowed
        if (!roles.includes(user.role)) {
            return res.status(401).json({ success: false, message: "You are not authorized" });
        }

        next();
    } catch (error) {
        // Handle unexpected errors
        console.error("Database error:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};
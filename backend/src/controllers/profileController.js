
import mongoose from "../config/database.js";

export default class ProfileController {
    saveProfile(req) {
        return new Promise((resolve, reject) => {

            const Profile = mongoose.model("Profile", {
                _id:  {type: String},
                email: {type: String},
                password: {type: String},
                fName: {type: String},
                lName: {type: String},
                isStrider: {type: String},
                defaultAddress: {type: String},
                noTripsCompleted: {type: String},
                hobbies: {type: String}
            })

            const profile = new Profile({
                _id: req.body.id, // phone number
                email: req.body.email,
                password:  req.body.password,
                fName: req.body.fName,
                lName:  req.body.lName,
                isStrider: req.body.isStrider,
                defaultAddress: req.body.address,
                noTripsCompleted: 0,
                hobbies: req.body.hobbies
            });

            // const profile = new Profile({
            //     _id: req.query.id, // phone number
            //     email: req.query.email,
            //     password:  req.query.password,
            //     fName: req.query.fName,
            //     lName:  req.query.lName,
            //     isStrider: req.query.isStrider,
            //     defaultAddress: req.query.address,
            //     noTripsCompleted: 0,
            //     hobbies: req.query.hobbies
            // });

            profile.save((err, res) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    console.log("Resolving the promise");
                    resolve(res);
                }

            });
        });
    }
}

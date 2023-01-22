// import mongoose from "../config/database.js";

import mongoose from 'mongoose';
const { Schema } = mongoose;

var profileSchema = new Schema({
    _id: { type: String },
    email: { type: String },
    password: { type: String },
    fName: { type: String },
    lName: { type: String },
    isStrider: { type: String },
    defaultAddress: { type: String },
    noTripsCompleted: { type: String },
    hobbies: { type: String }
});

const Profile = mongoose.model('Profile', profileSchema);


export default class ProfileController {
    saveProfile(req) {
        return new Promise((resolve, reject) => {

            const new_profile = new Profile({
                _id: req.body.id, // phone number
                email: req.body.email,
                password: req.body.password,
                fName: req.body.fName,
                lName: req.body.lName,
                isStrider: req.body.isStrider,
                defaultAddress: req.body.address,
                noTripsCompleted: 0,
                hobbies: req.body.hobbies
            });

            new_profile.save((err, res) => {
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

    getProfile(req) {
        return new Promise((resolve, reject) => {
            Profile.findOne(({ _id: req.body.id }), function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    console.log("Successfully found!");
                    resolve(res);
                }
            })
        });
    }

    updateProfile(req) {
        const doc = Profile.findOne(({ _id: req.body.id }), async function (err, res) {
            if (err) {
                console.log("Not found");
            } else {
                doc._id = req.body.id;
                doc.email = req.body.email;
                doc.password = req.body.password;
                doc.fName = req.body.fName;
                doc.lName = req.body.lName;
                doc.isStrider = req.body.isStrider;
                doc.defaultAddress = req.body.address;
                doc.noTripsCompleted = 0;
                doc.hobbies = req.body.hobbie;
                await doc.save;
            }
        })
    }
}

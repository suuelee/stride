// import mongoose from "../config/database.js";

import mongoose from 'mongoose';
const { Schema } = mongoose;

var profileSchema = new Schema({
    _id: { type: String },
    email: { type: String },
    password: { type: String },
    fName: { type: String },
    lName: { type: String },
    isStrider: { type: Number },
    defaultAddress: { type: String },
    noTripsCompleted: { type: Number },
    hobbies: { type: String },
    top: { type: String },
    pants: { type: String },
    height: { type: String },
    hair: { type: String },
    race: { type: String },
    gender: { type: String }

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
                hobbies: req.body.hobbies,
                top: req.body.top,
                pants: req.body.pants,
                height: req.body.height,
                hair: req.body.hair,
                race: req.body.race,
                gender: req.body.gender
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
            Profile.findOne(({ _id: req.params.userId }), function (err, res) {
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
        return new Promise((resolve, reject) => {
            return Profile.findOne({
                _id: req.body.id
            }).then(res => {
                return Profile.findOneAndUpdate({
                    _id: req.body.id
                }, {
                    _id: req.body.id,
                    email: req.body.email,
                    password: req.body.password,
                    fName: req.body.fName,
                    lName: req.body.lName,
                    isStrider: req.body.isStrider,
                    defaultAddress: req.body.address,
                    noTripsCompleted: req.body.noTripsCompleted,
                    hobbies: req.body.hobbies,
                    top: req.body.top,
                    bottom: req.body.bottom,
                    height: req.body.height,
                    hair: req.body.hair,
                    race: req.body.race,
                    gender: req.body.gender
                })
            }).then(res => {
                    console.log("Successfully found!");
                    resolve(res);
            })
        })
    }
}

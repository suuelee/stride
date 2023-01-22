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
                })
            }).then(res => {

                    console.log("Successfully found!");
                    resolve(res);

            })
        })



        function signup(email) {
            return usersSchema.findOne({
                email: email
            }).then(res => {
                if (res) throw 'The user already exists'
                var new_user = new usersSchema({ email: email })
                return new_user.save()
            }).then(res => {
                var result = parse_result(res)
                return codesSchema.findOneAndUpdate({
                    used: false,
                    user_id: true
                }, {
                    used: true,
                    user_id: mongoose.Types.ObjectId(result._id)
                })
            })
        }
    }
}

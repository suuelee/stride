
import Profile from "../models/profile.js";

export default class ProfileController {
    saveProfile(req) {
        return new Promise((resolve, reject) => {
            const ProfileModel = new Profile();

            const profile = {
                _id: req.body.id, // phone number
                email: req.body.email,
                password:  req.body.password,
                fName: req.body.fName,
                lName:  req.body.lName,
                isStrider: req.body.isStrider,
                defaultAddress: req.body.address,
                noTripsCompleted: 0,
                hobbies: req.body.hobbies
            };

            ProfileModel.insertProfile(profile, (err, result) => {
                if (err) {
                    reject({ error: err });
                }
                resolve(result);
            });
        });
    }
}

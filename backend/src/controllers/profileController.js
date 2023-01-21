
import Profile from "../models/profile.js";

export default class ProfileController {
    saveProfile(req) {
        return new Promise((resolve, reject) => {
            const ProfileModel = new Profile();

            const profile = {
                name: req.body.name,
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
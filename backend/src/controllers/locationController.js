import mongoose from 'mongoose';
const { Schema } = mongoose;

var locationSchema = new Schema({
    _id: { type: String },
    userID: { type: String },
    striderID: { type: String },
    timestamp: { type: Date },
    latitude: { type: Number },
    longitude: { type: Number }
});

const Location = mongoose.model('Location', locationSchema);

export default class LocationController {
    addLocation(req) {
        return new Promise((resolve, reject) => {
            const new_location = new Location({
                _id: req.body._id,
                userID: req.body.userID,
                striderID: req.body.striderID,
                timestamp: req.body.timestamp,
                latitude: req.body.latitude,
                longitude: req.body.longitude
            });

            new_location.save((err, res) => {
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

    getLocation(req) {
        return new Promise((resolve, reject) => {
            Location.findOne(({ _id: req.body._id }), function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    console.log("Successfully found!");
                    resolve(res);
                }
            })
        });
    }
}

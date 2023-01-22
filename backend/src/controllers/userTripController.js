
import UserTrip from "../models/userTrip.js"

import mongoose from 'mongoose';
import {Timestamp} from "mongodb";
const { Schema } = mongoose;

var tripSchema =new Schema({
    userId: {type: Number},
    striderId: {type: Number},
    pickupAddress: {type: String},
    dropoffAddress: {type: String},
    status: {type: String},
    createdTime:{type: Timestamp},
    pickupTime: {type: Timestamp},
    dropoffTime: {type: Timestamp}
});

export default class UserTripController {
    loadLocation(req) {
        const UserTripModel = new UserTrip();

        const userTrip = {
                userId: req.body.userId,
            };
            UserTripModel.getLocation(userTrip, (err, result) => {
                if (err) {
                    reject({ error: err });
                }
                resolve(result);
            });
        }



        saveLocation(req) {
        return new Promise((resolve, reject) => {
            const UserTripModel = new UserTrip();

            const userTrip = {
                userId: req.body.userId,
                striderId: req.body.striderId,
                pickupAddress: req.body.pickupAddress,
                dropoffAddress: req.body.dropoffAddress,
                status: req.body.status,
                createdTime: req.body.createdTime,
                pickupTime: req.body.pickupTime,
                dropoffTime: req.body.dropoffTime
            };

            UserTripModel.insertLocation(userTrip, (err, result) => {
                if (err) {
                    reject({ error: err });
                }
                resolve(result);
            });
        });
    }
        loadWalkerInfo(req) {
        return new Promise((resolve, reject) => {
            const UserTripModel = new UserTrip();

            const userTrip = {
                userId: req.body.userId,
            };

            UserTripModel.getWalkerInfo(userTrip, (err, result) => {
                if (err) {
                    reject({ error: err });
                }
                resolve(result);
            });
        });
    }

    loadWalkerOutfit(req) {
        return new Promise((resolve, reject) => {
            const UserTripModel = new UserTrip();

            const userTrip = {
                userId: req.body.userId,
            };

            UserTripModel.getWalkerOutfit(userTrip, (err, result) => {
                if (err) {
                    reject({ error: err });
                }
                resolve(result);
            });
        });

    }
    saveWalkerOutfit(req) {
        return new Promise((resolve, reject) => {
            const UserTripModel = new UserTrip();

            const walker = {
                userId: req.body.userId,
                shirt: req.body.shirt,
                pants: req.body.pants
            };

            UserTripModel.updateWalkerOutfit(walker, (err, result) => {
                if (err) {
                    reject({ error: err });
                }
                resolve(result);
            });
        });

    }

    endTrip(req) {
        const UserTripModel = new UserTrip();

        const trip = {
                userId: req.body.userId,
                tripId: req.body.tripId
            }
        UserTripModel.finishTrip(trip, (err, result) => {
            if (err) {
                reject({ error: err });
            }
            resolve(result);
        });


}

    saveStrideLocation(req) {
        return new Promise((resolve, reject) => {
            const UserTripModel = new UserTrip();

            const walker = {
                userId: req.body.userId,
                location: req.body.location,
            };

            UserTripModel.putStrideLocation(walker, (err, result) => {
                if (err) {
                    reject({ error: err });
                }
                resolve(result);
            });
        });


    }

    getStrideLocation(req) {
        return new Promise((resolve, reject) => {
            const UserTripModel = new UserTrip();

            const walker = {
                userId: req.body.userId,
            };

            UserTripModel.getStrideLocation(walker, (err, result) => {
                if (err) {
                    reject({ error: err });
                }
                resolve(result);
            });
        });


    }

    getAllPendingRequests(req){
        return new Promise((resolve, reject) => {
            const UserTripModel = new UserTrip();

            const walker = {
                userId: req.body.userId,
            };

            UserTripModel.getWalkRequests(walker, (err, result) => {
                if (err) {
                    reject({ error: err });
                }
                resolve(result);
            });
        });
    }
}

import UserTrip from "../models/userTrip.js"

export default class UserTripController {
        saveLocation(req) {
        return new Promise((resolve, reject) => {
            const UserTripModel = new UserTrip();

            const userTrip = {
                userId: req.body.id,
                pickupAddress: req.body.pickupAddress,
                dropoffAddress: req.body.dropoffAddress
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
import mongoose from "mongoose";
const { Schema } = mongoose;

var tripSchema = new Schema({
  _id: { type: String },
  userId: { type: Number },
  striderId: { type: Number },
  pickupAddress: { type: String },
  dropoffAddress: { type: String },
  status: { type: String },
  createdTime: { type: Date },
  pickupTime: { type: Date },
  dropoffTime: { type: Date },
});
const UserTrip = mongoose.model("Trip", tripSchema);

const UserTripModel = mongoose.model('Trip', tripSchema);

export default class UserTripController {
  loadLocation(req) {
    return new Promise((resolve, reject) => {
      console.log("Id is " + req.body.userId);
      UserTrip.findOne({ userId: req.body.userId }, function (err, res) {
        if (err) {
          reject(err);
        } else {
          console.log("Successfully found!" + res);
          resolve(res);
        }
      });
    });
  }

  loadLatestTrip(userId) {
    return new Promise((resolve, reject) => {
      UserTrip.findOne({ userId })
        .sort({ createdTime: -1 })
        .exec(function (err, res) {
          if (err) {
            reject(err);
          } else {
            console.log("Successfully found!" + res);
            resolve(res);
          }
        });
    });
  }

  saveLocation(req) {
    return new Promise((resolve, reject) => {
      const new_trip = new UserTrip({
        _id: req.body.id,
        userId: req.body.userId,
        striderId: req.body.striderId,
        pickupAddress: req.body.pickupAddress,
        dropoffAddress: req.body.dropoffAddress,
        status: req.body.status,
        createdTime: req.body.createdTime,
        pickupTime: req.body.pickupTime,
        dropoffTime: req.body.dropoffTime,
      });

      new_trip.save((err, result) => {
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
        pants: req.body.pants,
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
      tripId: req.body.tripId,
    };
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

  getAllPendingRequests(req) {
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
=======
    loadLocation(req) {
        return new Promise((resolve, reject) => {
            console.log("Id is "+ req.body.userId);
            UserTrip.findOne(({ userId: req.body.userId }), function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    console.log("Successfully found!");
                    resolve(res.pickupAddress);
                }});
        });
    }




    saveLocation(req) {
        return new Promise((resolve, reject) => {
            const new_trip = new UserTrip({
                _id: req.body.id,
                userId: req.body.userId,
                striderId: req.body.striderId,
                pickupAddress: req.body.pickupAddress,
                dropoffAddress: req.body.dropoffAddress,
                status: req.body.status,
                createdTime: req.body.createdTime,
                pickupTime: req.body.pickupTime,
                dropoffTime: req.body.dropoffTime
            });

            new_trip.save((err, result) => {
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
        // get all pending walkers
        return new Promise((resolve, reject) => {
            // const UserTripModel = new UserTrip();

            UserTripModel.find(({status: "pending"}), function (err, res) {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    console.log("resolving this promise !!");
                    resolve(res);
                }
            })
        });

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
}

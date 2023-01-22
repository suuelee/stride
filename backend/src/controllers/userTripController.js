import mongoose from "mongoose";
const { Schema } = mongoose;

var tripSchema = new Schema({
  _id: { type:  Number },
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

  endTrip(req) {
      console.log(req.body.id);
      return new Promise((resolve, reject) => {
        UserTrip.findOneAndUpdate(({ _id: req.body.id }), {status: "completed"}, {new: true}, function (err, res) {
          if (err) {
            reject(err);
          } else {
            console.log("Successfully found!" + res);
            resolve("Trip marked as " + res.status);
          }
        })
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


  loadLocation(req) {
    return new Promise((resolve, reject) => {
      console.log("Id is " + req.body.userId);
      UserTrip.findOne(({ userId: req.body.userId }), function (err, res) {
        if (err) {
          reject(err);
        } else {
          console.log("Successfully found!");
          resolve(res.pickupAddress);
        }
      });
    });
  }

  acceptTrip(req) {
    return new Promise((resolve, reject) => {
      return UserTrip.findOneAndUpdate({
        _id: req.body._id
      }, {
        status: "progress"
      }).then(res => {
        console.log("Successfully found!");
        resolve(res);
      })
    })
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

  loadLocation(req) {
    return new Promise((resolve, reject) => {
      console.log("Id is " + req.body.userId);
      UserTrip.findOne({ userId: req.body.userId }, function (err, res) {
        if (err) {
          reject(err);
        } else {
          console.log("Successfully found!");
          resolve(res.pickupAddress);
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
          console.log(err);
          reject(err);
        } else {
          console.log("resolving this promise !!");
          resolve(res);
        }
      })
    });
  }
  
  getAllPendingRequests(req) {
    // get all pending walkers
    return new Promise((resolve, reject) => {
      // const UserTripModel = new UserTrip();

      UserTripModel.find(({ status: "pending" }), function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log("resolving this promise !!");
          resolve(res);
        }
      })
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

  getAllPendingRequests() {
    // get all pending walkers
    return new Promise((resolve, reject) => {
      UserTrip.find({ status: "pending" }, function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
}

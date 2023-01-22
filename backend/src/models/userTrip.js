export default class UserTrip{

    insertLocation(userTrip, result) {
        /* userTrip Objects below
        userTrip = {
                userId: req.body.id,
                pickupAddress: req.body.pickupAddress,
                dropoffAddress: req.body.dropoffAddress
                }
         */


    }
    getWalkerInfo(userTrip, result){
        /*
        Get the following details for walker info:
        - Full Name
        - Height
        - Hair color
        - Ethnicity
        - Gender
        - hobbies
        - collections
        - total trips
        - trips on current shift completed

         */

    }

    getWalkerOutfit(userTrip, result) {
        /*
        Outfit colors are defined as:
        - Shirt
        - Pants
         */

    }

    saveWalkerOutfit(walker, result) {
        /*
        Walker Object:
         const walker = {
                userId: req.body.userId,
                shirt: req.body.shirt,
                pants: req.body.pants
            };
         */
    }

    finishTrip(trip, result) {
/*
Trip Object
  const trip = {
                userId: req.body.userId,
                tripId: req.body.tripId
            }
 */

    }

    updateWalkerOutfit(walker, result) {

    }

    putStrideLocation(walker, result) {
        /*
         const walker = {
                userId: req.body.userId,
                location: req.body.location,
            };

         */

    }

    getStrideLocation(walker, result) {

        /*
        Get location given userId

         */
    }
    
    getWalkRequests(result) {
        /*
        Get all pending walk requests
         */
    }
}
export default class Profile {

    insertProfile(newProfile, result) {
        // mongo query here
        console.log("entered function");
        db.collection("users").insertOne(newProfile, function (err, res) {
            if (err) throw err;
            console.log(`1 profile inserted, ${newProfile.name}`);
            db.close();
        });
    }
}

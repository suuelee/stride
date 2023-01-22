import { Router } from "express";
import LocationController from "../src/controllers/locationController.js";

const router = Router();
const locationController = new LocationController();

router.post("/addLocation", (req, res) => {
    console.log("receiving");
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    locationController
        .addLocation(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json(err);
        });
});

router.get("/getLocation", (req, res) => {
    console.log("receiving");
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    locationController
        .getLocation(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json(err);
        });
});

export default router;

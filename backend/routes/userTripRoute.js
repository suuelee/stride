import { Router } from "express";
import UserTripController from "../src/controllers/userTripController.js";

const router = Router();
const userTripController = new UserTripController();

router.post("/location", (req, res) => {
    if (!req.params) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    userTripController.saveLocation(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
})

router.get("/location", (req, res) => {
    if (!req) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    userTripController.loadLocation(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
})

router.get("/latest/:userId", (req, res) => {
    if (!req.params) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    userTripController.loadLatestTrip(req.params.userId)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
})

router.get("/stridelocation", (req, res) => {
    if (!req.params) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    userTripController.getStrideLocation(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
})

router.get("/walkRequests", (_, res) => {
    userTripController.getAllPendingRequests()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
})
router.post("/stridelocation", (req, res) => {
    if (!req.params) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    userTripController.saveStrideLocation(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
})
router.get("/walkerInfo", (req, res) => {
    if (!req) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    userTripController.loadWalkerInfo(req)
        .then((response) => {
            console.log("Result");
            res.status(200).json(response);
        })
        .catch((err) => {
            console.log("Error");
            res.status(404).json(err);
        });
})

router.get("/walkerOutfit", (req, res) => {
    if (!req) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    userTripController.loadWalkerOutfit(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
})

router.post("/walkerOutfit", (req, res) => {
    if (!req.params) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    userTripController.saveWalkerOutfit(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
})

router.post("/acceptTrip", (req, res) => {
    if (!req.params) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    userTripController.acceptTrip(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
})

router.post("/end", (req, res) => {
    if (!req.params) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    userTripController.endTrip(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
})

export default router;

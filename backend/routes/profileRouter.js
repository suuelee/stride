import { Router } from "express";
import ProfileController from "../src/controllers/profileController.js";

const router = Router();
const profileController = new ProfileController();

router.post("/", (req, res) => {
    if (!req.params) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    profileController
        .saveProfile(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
});

export default router;

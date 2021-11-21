import express from "express";
import {
    authUser,
    getAllUserList,
    getInsUserList,
    getLearnerUserList,
    getUserByID,
    getUserProfile,
    registerUser,
    updateUserProfile,
    deleteUserByID,
    deleteLearnerByIDandFastName,
} from "../controllers.js/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router
    .route("/profile")
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

router.route("/all").get(getAllUserList);
router.route("/learner").get(getLearnerUserList);
router.route("/ins").get(getInsUserList);
router.route("/getby/:id").get(getUserByID);

router.route("/delete/:id").delete(protect, deleteUserByID);

router.route("/delete/:id/:fastName").delete(protect, deleteLearnerByIDandFastName)

export default router;

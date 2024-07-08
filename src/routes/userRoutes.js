import {getBookingsByUserId, signin, signup} from "../contollers/userContoller.js";
import express from "express";

const router = express.Router();
router.post('/signup', signup);
router.post('/signin', signin);

router.get('/:userId', getBookingsByUserId);
export default router;

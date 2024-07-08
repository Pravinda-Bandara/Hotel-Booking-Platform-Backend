import {signin, signup} from "../contollers/userContoller.js";
import express from "express";

const router = express.Router();
router.post('/signup', signup);
router.post('/signin', signin);
export default router;

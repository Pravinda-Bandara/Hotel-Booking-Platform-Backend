import express from "express";
import {
    createBooking,
    deleteBooking,
    getBookingById,
    getBookings,
    updateBooking
} from "../contollers/BookingContoller.js";
import {getBookingsByUserId} from "../contollers/userContoller.js";
const router = express.Router();

router.get('/:id', getBookingById);
router.patch('/:id', updateBooking);
router.delete('/:id', deleteBooking);

router.post('/', createBooking);
router.get('/', getBookings);


router.get('/user/:userId', getBookingsByUserId);



export default router;

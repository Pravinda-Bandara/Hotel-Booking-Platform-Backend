import express from "express";
import {
    createBooking,
    deleteBooking,
    getBookingById,
    getBookings,
    updateBooking
} from "../contollers/BookingContoller.js";
const router = express.Router();

router.get('/:id', getBookingById);
router.patch('/:id', updateBooking);
router.delete('/:id', deleteBooking);

router.post('/', createBooking);
router.get('/', getBookings);




export default router;

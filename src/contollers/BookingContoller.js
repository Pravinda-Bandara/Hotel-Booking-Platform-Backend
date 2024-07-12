import asyncHandler from 'express-async-handler';
import Booking from "../models/Booking.js";

// Create Booking
export const createBooking = asyncHandler(async (req, res) => {
    const { userId, hotelName, checkInDateTime, checkOutDateTime, guestName, guestPhoneNumber, status, description } = req.body;

    const booking = new Booking({
        userId,
        hotelName,
        checkInDateTime,
        checkOutDateTime,
        guestName,
        guestPhoneNumber,
        status,
        description
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
});

// Get All Bookings
export const getBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({});
    res.json(bookings);
});

// Get Booking by ID
export const getBookingById = asyncHandler(async (req, res) => {
    console.log(req.params.id)
    const booking = await Booking.findById(req.params.id);
    console.log(booking)

    if (booking) {
        res.json(booking);
    } else {
        res.status(404).json({ message: 'Booking not found' });
    }
});

// Update Booking
export const updateBooking = asyncHandler(async (req, res) => {
    const { hotelName, checkInDateTime, checkOutDateTime, guestName, guestPhoneNumber, status, description } = req.body;

    const booking = await Booking.findById(req.params.id);

    if (booking) {
        booking.hotelName = hotelName || booking.hotelName;
        booking.checkInDateTime = checkInDateTime || booking.checkInDateTime;
        booking.checkOutDateTime = checkOutDateTime || booking.checkOutDateTime;
        booking.guestName = guestName || booking.guestName;
        booking.guestPhoneNumber = guestPhoneNumber || booking.guestPhoneNumber;
        booking.status = status || booking.status;
        booking.description = description || booking.description;

        const updatedBooking = await booking.save();
        res.json(updatedBooking);
    } else {
        res.status(404).json({ message: 'Booking not found' });
    }
});

// Delete Booking
export const deleteBooking = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);

    if (booking) {
        await booking.deleteOne(); // Or use booking.findByIdAndDelete(req.params.id)
        res.json({ message: 'Booking removed' });
    } else {
        res.status(404).json({ message: 'Booking not found' });
    }
});

// Get Bookings by User ID
export const getBookingsByUserId = asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    console.log(req.params.userId)
    const bookings = await Booking.find({ userId });

    if (bookings) {
        res.json(bookings);
    } else {
        res.status(404).json({ message: 'Bookings not found for this user' });
    }
});


// Export all functions
export default {
    createBooking,
    getBookings,
    getBookingById,
    updateBooking,
    deleteBooking,
    getBookingsByUserId
};

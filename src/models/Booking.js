import mongoose, {Schema} from "mongoose";

const BookingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    hotelName: {
        type: String,
        required: true,
        trim: true
    },
    checkInDateTime: {
        type: Date,
        required: true
    },
    checkOutDateTime: {
        type: Date,
        required: true
    },
    guestName: {
        type: String,
        required: true,
        trim: true
    },
    guestPhoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending'
    },
    description: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const Booking = mongoose.model('Booking', BookingSchema);
export default Booking;

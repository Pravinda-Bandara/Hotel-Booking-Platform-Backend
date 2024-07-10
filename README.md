# Hotel Booking Platform

## Version
0.1.0

#### Front-end  - https://github.com/Pravinda-Bandara/Hotel-Booking-Platform-Frontend

## Introduction

Welcome to our Hotel Booking Platform! This platform allows users to register and log in securely using JWT (JSON Web Tokens). Once logged in, users can manage their bookings with a user-friendly interface. The backend, powered by the MERN stack (MongoDB, Express.js, React.js, Node.js), efficiently handles HTTP requests, user authentication, and database interactions.

### Features

#### User Features
- **User Authentication:** Users can securely register and log in.
- **Booking Management:** Users can create, read, update, and delete bookings.
- **JWT Authorization:** Supports JWT authorization with USER and ADMIN roles for scalable application security.
- **Data Security:** Passwords are hashed using bcrypt for enhanced security.
- **Responsive Design:** The application is responsive and optimized for both desktop and mobile devices.

### Backend Technologies Used

- **Database:** MongoDB with Mongoose
- **Server:** Node.js with Express

### Schemas

#### Booking Schema
- **userId:** Reference to the user who made the booking.
- **hotelName:** Name of the hotel.
- **checkInDateTime:** Date and time for check-in.
- **checkOutDateTime:** Date and time for check-out.
- **guestName:** Name of the guest.
- **guestPhoneNumber:** Phone number of the guest.
- **status:** Booking status (Pending, Confirmed, Cancelled).
- **description:** Additional booking details.

#### User Schema
- **email:** User's email address.
- **password:** User's hashed password.
- **role:** User's role (USER or ADMIN).

### Routes
- **User Registration:** `POST /api/v1/users/signup`
- **User Login:** `POST /api/v1/users/signin`
- **Get User Bookings:** `GET /api/v1/bookings/user/:userId`
- **Create Booking:** `POST /api/v1/bookings`
- **Get Booking By ID:** `GET /api/v1/bookings/:bookingId`
- **Update Booking:** `PUT /api/v1/bookings/:bookingId`
- **Delete Booking:** `DELETE /api/v1/bookings/:bookingId`

## Usage Disclaimer

This project and its associated code are used for educational and learning purposes. The application and any included code are not intended for commercial use.

## License

Copyright &copy; 2024 Pravinda. All Rights Reserved <br>
This project is licensed under the [MIT License](LICENSE.txt).

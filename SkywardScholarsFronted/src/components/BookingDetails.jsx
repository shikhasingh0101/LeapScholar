import React, { useState } from 'react';

const BookingDetails = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  const getBookingDetails = () => {
    // Logic to fetch and display booking details
    setBookingDetails('Booking Details fetched!');
  };

  return (
    <div>
      <h2>IELTS Booking Details</h2>
      <button onClick={getBookingDetails}>Get Booking Details</button>
      {bookingDetails && <p>{bookingDetails}</p>}
    </div>
  );
};

export default BookingDetails;

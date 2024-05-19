import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import "../../styles/booking-information.css";


function BookingInformation() {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getAllBookingInfo')
      .then(response => {
        // Update the state with the received data
        setBookingData(response.data.bookingInfos);
      })
      .catch(error => {
        // Handle the error if needed
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/deleteBookingInfo/${id}`)
      .then(response => {
        // Remove the deleted record from the state
        setBookingData(prevData => prevData.filter(booking => booking.id !== id));
        // Show success toast
        toast.success('Record deleted successfully');
      })
      .catch(error => {
        // Handle the error if needed
        console.error(error);
      });
  };



  return (
    <>
      <div className="bookingInformation-title">
        <h1>Contact Details</h1>
      </div>
      <div className="booking-table-base">
        {/* Table Structure */}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className='background-blue'>First Name</th>
              <th className='background-blue'>Last Name</th>
              <th className='background-blue'>E-mail</th>
              <th className='background-blue'>Phone Number</th>
              <th className='background-blue'>From Address</th>
              <th className='background-blue'>To Address</th>
              <th className='background-blue'>No Of Persons</th>
              <th className='background-blue'>No Of Luggages</th>
              <th className='background-blue'>Date</th>
              <th className='background-blue'>Time</th>
              <th className='background-blue'>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking, index) => (
              <tr key={index}>
                <td>{booking.firstname}</td>
                <td>{booking.lastname}</td>
                <td>{booking.email}</td>
                <td>{booking.phoneno}</td>
                <td>{booking.fromaddress}</td>
                <td>{booking.toaddress}</td>
                <td>{booking.numofpersons}</td>
                <td>{booking.numofbags}</td>
                <td>{booking.journeydate}</td>
                <td>{booking.journeytime}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(booking.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <ToastContainer />
    </>
  );
}

export default BookingInformation;
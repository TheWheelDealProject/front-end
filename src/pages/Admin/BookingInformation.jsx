import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import "../../styles/booking-information.css";
import { Container } from 'react-bootstrap';
import { Spinner } from 'reactstrap';


function BookingInformation() {
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try{
      axios.get(`${process.env.REACT_APP_URL_SERVER}/getAllBookingInfo`)
        .then(response => {
          // Update the state with the received data
          setBookingData(response.data.bookingInfos);
          setLoading(false)
        })
    
    }catch(error){
      console.error(error);
    }finally{
      setLoading(true)
    }
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_URL_SERVER}/deleteBookingInfo/${id}`)
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
      <Container>
        <div className="bookingInformation-title">
          <h1>Booking Informations</h1>
        </div>
        {loading ? (
          <div className="blog__item">
            <div className="spinner-container">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          </div>
      ) : (

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
      )}
        <ToastContainer />
      </Container>
    </>
  );
}

export default BookingInformation;
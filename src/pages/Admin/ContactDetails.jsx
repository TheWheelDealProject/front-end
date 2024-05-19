import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';

import "../../styles/contact-details.css";
import { toast } from 'react-toastify';
import { Spinner, Table } from 'reactstrap';

function ContactDetails() {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true); // New state variable for loading

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      setLoading(true)
      axios
        .get('http://localhost:3001/getAllContacts')
        .then(response => {
          setContactData(response.data.contacts);
        })
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  };

  const handleDeleteContact = (id) => {
    axios
      .delete(`http://localhost:3001/deleteContact/${id}`)
      .then(response => {
        console.log(response.data);
        // Update the contactData state after successful deletion
        setContactData(prevData => prevData.filter(contact => contact.id !== id));
        toast.success('Record Deleted Successfully')
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Container className="mt-3 mb-3">
       <h1>Contact Details</h1>
      
        <div className="contactDetails-title">
         
        </div>
        {loading ? ( // Display the spinner when loading is true
          <div className='spinner-container'>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <div className="contact-table-base">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className='header-table'>Name</th>
                  <th className='header-table'>Email</th>
                  <th className='header-table'>Message</th>
                  <th className='header-table'>Action</th>
                </tr>
              </thead>
              <tbody>
                {contactData.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.firstname}</td>
                    <td>{contact.email}</td>
                    <td>{contact.description}</td>
                    <td>
                      <Button variant="danger" onClick={() => handleDeleteContact(contact.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      
    </Container>
  );
}

export default ContactDetails;
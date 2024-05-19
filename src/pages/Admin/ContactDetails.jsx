import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

import "../../styles/contact-details.css";
import { toast } from 'react-toastify';

function ContactDetails() {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:3001/getAllContacts')
      .then(response => {
        setContactData(response.data.contacts);
      })
      .catch(error => {
        console.error(error);
      });
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
    <>
      <div className="contactDetails-title">
        <h1>Contact Details</h1>
      </div>
      <div className="contact-table-base">
        {/* Table Structure */}
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
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
        </table>
      </div>
    </>
  );
}

export default ContactDetails;
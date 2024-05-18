import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    let bookinginfo= {
      firstname : event.target.firstname.value,
      lastname : event.target.lastname.value,
      email : event.target.email.value,
      phoneno : event.target.phoneno.value,
      fromaddress : event.target.fromaddress.value,
      toaddress : event.target.toaddress.value,
      numofpersons : event.target.numofpersons.value,
      numofbags : event.target.numofbags.value,
      journeydate : event.target.journeydate.value,
      journeytime : event.target.journeytime.value,
      description : event.target.description.value,
    };
    console.log(bookinginfo)
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input id="firstname" name="firstname"  type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input id="lastname" name="lastname" type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input id="email" name="email" type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input id="phoneno" name="phoneno" type="number" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input id="fromaddress" name="fromaddress" type="text" placeholder="From Address" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input id="toaddress" name="toaddress" type="text" placeholder="To Address" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select  name="numofpersons" id="numofpersons">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="numofbags" id="numofbags">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input name="journeydate" id="journeydate" type="date" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
        name="journeytime"
         id="journeytime"
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
        name="description"
        id="description"
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>
      <FormGroup>
      <button id="reserveNo" type="submit">Reserve Now</button>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;

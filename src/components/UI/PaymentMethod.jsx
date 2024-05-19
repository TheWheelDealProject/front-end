import React from "react";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Direct Bank Transfer */}
      <div className="payment">
        <label htmlFor="directTransfer" className="d-flex align-items-center gap-2">
          <input id="directTransfer" type="radio" name="paymentMethod" /> Direct Bank Transfer
        </label>
      </div>

      {/* Cheque Payment */}
      <div className="payment mt-3">
        <label htmlFor="chequePayment" className="d-flex align-items-center gap-2">
          <input id="chequePayment" type="radio" name="paymentMethod" /> Cheque Payment
        </label>
      </div>

      {/* Master Card */}
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="masterCard" className="d-flex align-items-center gap-2">
          <input id="masterCard" type="radio" name="paymentMethod" /> Master Card
        </label>
        <img src={masterCard} alt="" />
      </div>

      {/* Paypal */}
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="paypal" className="d-flex align-items-center gap-2">
          <input id="paypal" type="radio" name="paymentMethod" /> Paypal
        </label>
        <img src={paypal} alt="" />
      </div>
      
      {/* Submit Button */}
      <div className="payment text-end mt-5">
        <button id="reserveNow" type="submit">Pay Now</button>
      </div>
    </form>
  );
};

export default PaymentMethod;
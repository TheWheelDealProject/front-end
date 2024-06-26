import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  // const { imgurl, model, carName, automatic, speed, price } = props.item;
  const { id, imgurl, model, carname, automatic, speed, price } = props.item;




  return (
    <Col lg="4" md="4" sm="6" className="mb-5" data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
      <div className="car__item">
        <div className="car__img">
          <img src={imgurl} alt="" className="car__image" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carname}</h4>
          <h6 className="rent__price text-center mt-">
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <Link to={`/cars/${id}`}>
            <button className="w-100 car__item-btn car__btn-rent text-white">Rent</button>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;

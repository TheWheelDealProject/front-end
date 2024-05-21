import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import per1 from "../../assets/all-images/testonomeales/per-1.png";
import per2 from "../../assets/all-images/testonomeales/per-2.png";
import per3 from "../../assets/all-images/testonomeales/per-3.png";
import per4 from "../../assets/all-images/testonomeales/per-4.png";
import per5 from "../../assets/all-images/testonomeales/per-5.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          The Wheel Deal made my road trip a breeze!
          Brand-new car, super smooth ride,
          and the price couldn't be beat.
          I'll definitely be renting from them again.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={per1} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Lana AL-karebe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I was hesitant to rent a car, but The Wheel Deal exceeded my expectations.
          Their online booking was easy, the staff was friendly,
          and the car was spotless.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={per2} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Loay Al-Hassan</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          As a frequent traveler, I've tried many rental companies,
          but The Wheel Deal is my new go-to. Their prices are incredibly affordable,
          and their cars are always in top condition.

        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={per3} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Zaid Rajab</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I had a last-minute trip and The Wheel Deal saved the day!
          They had a great selection of cars available,
          and the pickup process was quick and painless.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={per4} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Mouath Al-Hariri</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I had a last-minute trip and The Wheel Deal saved the day!
          They had a great selection of cars available,
          and the pickup process was quick and painless.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={per5} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Hassan Karaze</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;

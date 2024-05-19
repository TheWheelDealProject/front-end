import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutclassName }) => {
  return (
    <section
      className="about__section"
      style={
        aboutclassName === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to The Wheel Deal</h2>
              <p className="section__description">
                Experience the open road without breaking the bank! At The Wheel Deal,
                 we offer a fleet of brand-new rental cars at the most competitive prices in town.
                  Whether you're planning a weekend getaway, a cross-country road trip,
                   or simply need a reliable ride, we've got the perfect wheels for you.
                    With our commitment to quality, convenience, and unbeatable value,
                     The Wheel Deal is your one-stop shop for hassle-free car rentals.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Tourism Rentals 
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Event Rentals
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Bridal Rentals
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Business Travel Rentals
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;

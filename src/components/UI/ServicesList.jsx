import React, { useEffect } from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {servicesData.map((item, index) => {
        // Determine the data-aos value based on the index
        let dataAos = "";
        if (index < 3) {
          dataAos = "fade-right";
        } else if (index < 6) {
          dataAos = "fade-left";
        }
        return <ServiceItem item={item} key={item.id} dataAos={dataAos} />;
      })}
    </>
  );
};

const ServiceItem = ({ item, dataAos }) => (
  <Col lg="4" md="4" sm="6" className="mb-3" data-aos={dataAos}>
    <div className="service__item">
      <span className="mb-3 d-inline-block">
        <i className={item.icon} />
      </span>
      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
);

export default ServicesList;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Form } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import axios from "axios";
import "../styles/carList.css";
import { BsSearch } from 'react-icons/bs';

const CarListing = () => {
  const [loading, setLoading] = useState(true);
  const [carData, setCarData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    try {
       axios.get(`${process.env.REACT_APP_URL_SERVER}/getAllCars`).then((response) => {
        setCarData(response.data.cars);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCars = carData.filter((car) =>
    car.carname && car.carname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      {loading ? (
        <div className="spinner-container">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <section>
          <Container>
            <Row className="mb-5">
              <Col lg="12">
                <Form>
                  <Form.Group className="d-flex align-items-center gap-3">
                    <div className="input-group search-container">
                      <Form.Control
                        type="text"
                        placeholder="Search a car..."
                        value={searchQuery}
                        onChange={handleSearchQueryChange}
                      />
                      <span className="input-group-text" id="basic-addon2">
                        <BsSearch className="fs-6" />
                      </span>
                    </div>

                    <Form.Select>
                      <option>Select</option>
                      <option value="low">Low to High</option>
                      <option value="high">High to Low</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Col>
            </Row>

            <Row>
              {filteredCars.map((car) => (
                // <Col lg="2" key={car.id}>
                <CarItem item={car} />
                // </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}
    </Helmet>
  );
};

export default CarListing;
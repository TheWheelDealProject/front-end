import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import "../../styles/edit-car.css"


function EditCar() {
    const [cars, setCars] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCar, setSelectedCar] = useState({
        id: '',
        brand: '',
        rating: '',
        carname: '',
        imgurl: '',
        model: '',
        price: '',
        speed: '',
        gps: '',
        seattype: '',
        automatic: '',
        description: ''
    });

    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/getAllCars')
            .then(response => {
                setCars(response.data.cars);
                console.log(response.data.cars);
            })
            .catch(error => {
                console.error('There was an error fetching the cars!', error);
            });
    }, [refresh]);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteCar/${id}`)
            .then(response => {
                console.log(`Car with ID: ${id} deleted successfully.`);
                setCars(prevCars => prevCars.filter(car => car.id !== id));
                setRefresh(prev => !prev);
                toast.success("Car Deleted Successfully!");
            })
            .catch(error => {
                console.error('There was an error deleting the car!', error);
                toast.error("Something went wrong!");
            });
    };

    const handleUpdate = (car) => {
        setSelectedCar(car);
        console.log(car);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedCar({
            id: '',
            brand: '',
            rating: '',
            carname: '',
            imgurl: '',
            model: '',
            price: '',
            speed: '',
            gps: '',
            seattype: '',
            automatic: '',
            description: ''
        });
    };

    const handleModalSubmit = () => {
        axios.put(`http://localhost:3001/editCar/${selectedCar.id}`, selectedCar)
            .then(response => {
                setCars(prevCars => prevCars.map(car => car.id === selectedCar.id ? selectedCar : car));
                console.log(`Car with ID: ${selectedCar.id} updated successfully.`);
                setRefresh(prev => !prev);
                handleModalClose();
                toast.success("Car updated Successfully!");
            })
            .catch(error => {
                console.error('There was an error updating the car!', error);
                toast.error("Something went wrong!");
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedCar(prevCar => ({
            ...prevCar,
            [name]: value
        }));
        console.log(name, value);
    };

    return (
        <Container className="mt-3 mb-3">
            <Row>
                <Col>
                    <Table striped bordered hover style={{ borderRadius: '5px', overflow: 'hidden' }}>
                        <thead>
                            <tr >
                                <th className='header-table'>ID</th>
                                <th className='header-table'>Car Name</th>
                                <th className='header-table'>Brand</th>
                                <th className='header-table'>Price</th>
                                <th className='header-table'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(cars) && cars.map(car => (
                                <tr key={car.id}>
                                    <td>{car.id}</td>
                                    <td>{car.carname}</td>
                                    <td>{car.brand}</td>
                                    <td>{car.price}</td>
                                    <td>
                                        <Button
                                            variant="warning"
                                            onClick={() => handleUpdate(car)}
                                            className="me-2"
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleDelete(car.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formCarName">
                                    <Form.Label>Car Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="carname"
                                        value={selectedCar.carname}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formBrand">
                                    <Form.Label>Brand</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="brand"
                                        value={selectedCar.brand}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formRating">
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="rating"
                                        value={selectedCar.rating}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formImgUrl">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="imgurl"
                                        value={selectedCar.imgurl}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formModel">
                                    <Form.Label>Model</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="model"
                                        value={selectedCar.model}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="price"
                                        value={selectedCar.price}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formSpeed">
                                    <Form.Label>Speed</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="speed"
                                        value={selectedCar.speed}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formGPS">
                                    <Form.Label>GPS</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="gps"
                                        value={selectedCar.gps}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formSeatType">
                                    <Form.Label>Seat Type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="seattype"
                                        value={selectedCar.seattype}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formAutomatic">
                                    <Form.Label>Automatic</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="automatic"
                                        value={selectedCar.automatic}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="description"
                                        value={selectedCar.description}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleModalSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default EditCar;




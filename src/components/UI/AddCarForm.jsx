import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddCarForm() {

    const notify = () => toast.success("Car Added Successfully!");


    const { Formik } = formik;

    const schema = yup.object().shape({
        carName: yup.string().required('Car name is required'),
        brand: yup.string().required('Brand is required'),
        model: yup.string().required('Model is required'),
        price: yup.number().required('Price is required').positive('Price must be positive'),
        speed: yup.string().required('Speed is required'),
        rating: yup.number().required('Rating is required').positive('Rating must be positive').integer('Rating must be an integer'),
        gps: yup.string().required('GPS information is required'),
        seatType: yup.string().required('Seat type is required'),
        automatic: yup.string().required('Transmission type is required'),
        imgUrl: yup.string().url('Invalid URL').required('Image URL is required'),
        description: yup.string().required('Description is required'),
    });

    const handleSubmit = async (values) => {
        console.log("I am in handle submit function");
        console.log('Form Data:', values);
        try {
            const response = await axios.post('http://localhost:3001/addCar', values);
            console.log('Car added successfully:', response.data);
            toast.success("Car Added Successfully!");
        } catch (error) {
            console.error('Error adding car:', error);
            toast.error("Something went wrong!");
        }
    };

    return (

        <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{
                brand: "",
                rating: 0,
                carName: "",
                imgUrl: '',
                model: "",
                price: 0,
                speed: "",
                gps: "",
                seatType: "",
                automatic: "",
                description: "",
            }}
        // initialValues={{
        //     carName: "Tesla Malibu",
        //     brand: "Tesla",
        //     model: "Model 3",
        //     price: 50,
        //     speed: "20kmpl",
        //     rating: 112,
        //     gps: "GPS Navigation",
        //     seatType: "Heated seats",
        //     automatic: "Automatic",
        //     imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAl8eXkjSG917H_K0dtCSigo9fDyvRdT1uxw&usqp=CAU',
        //     description:
        //         "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
        // }}
        >

            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit} className="mt-3 mb-3">
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="formCarName">
                            <Form.Label>Car Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="carName"
                                value={values.carName}
                                onChange={handleChange}
                                isInvalid={touched.carName && !!errors.carName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.carName}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="formBrand">
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="brand"
                                value={values.brand}
                                onChange={handleChange}
                                isInvalid={touched.brand && !!errors.brand}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.brand}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="formModel">
                            <Form.Label>Model</Form.Label>
                            <Form.Control
                                type="text"
                                name="model"
                                value={values.model}
                                onChange={handleChange}
                                isInvalid={touched.model && !!errors.model}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.model}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={values.price}
                                onChange={handleChange}
                                isInvalid={touched.price && !!errors.price}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.price}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="formSpeed">
                            <Form.Label>Speed</Form.Label>
                            <Form.Control
                                type="text"
                                name="speed"
                                value={values.speed}
                                onChange={handleChange}
                                isInvalid={touched.speed && !!errors.speed}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.speed}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="formRating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                                type="number"
                                name="rating"
                                value={values.rating}
                                onChange={handleChange}
                                isInvalid={touched.rating && !!errors.rating}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.rating}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="formGps">
                            <Form.Label>GPS</Form.Label>
                            <Form.Control
                                type="text"
                                name="gps"
                                value={values.gps}
                                onChange={handleChange}
                                isInvalid={touched.gps && !!errors.gps}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.gps}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="formSeatType">
                            <Form.Label>Seat Type</Form.Label>
                            <Form.Control
                                type="text"
                                name="seatType"
                                value={values.seatType}
                                onChange={handleChange}
                                isInvalid={touched.seatType && !!errors.seatType}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.seatType}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="formAutomatic">
                            <Form.Label>Automatic</Form.Label>
                            <Form.Control
                                type="text"
                                name="automatic"
                                value={values.automatic}
                                onChange={handleChange}
                                isInvalid={touched.automatic && !!errors.automatic}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.automatic}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="formImgUrl">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                name="imgUrl"
                                value={values.imgUrl}
                                onChange={handleChange}
                                isInvalid={touched.imgUrl && !!errors.imgUrl}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.imgUrl}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group controlId="formDescription" className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                            isInvalid={touched.description && !!errors.description}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.description}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            )}
        </Formik>
    );
}

export default AddCarForm;

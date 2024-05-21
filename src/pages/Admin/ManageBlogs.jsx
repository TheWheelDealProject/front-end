import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "../../styles/manage-blogs.css"
import { Spinner } from 'reactstrap';

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentBlog, setCurrentBlog] = useState({
        id: '',
        title: '',
        author: '',
        imgurl: '',
        description: '',
        quote: '',
    });
    const [loading, setLoading] = useState(true); // New state variable for loading

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            setLoading(true); // Set loading to true before making the request
            const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/getAllBlogs`);
            setBlogs(response.data.blogs);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false); // Set loading to false after the request is completed
        }
    };


    const handleDelete = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_URL_SERVER}/deleteBlog/${id}`);
            setBlogs(blogs.filter(blog => blog.id !== id));
            toast.success("Blog Deleted Successfully!");
        } catch (error) {
            console.error('Error deleting blog:', error);
            toast.error("Something went wrong!");
        }
    };

    const handleShowModal = (blog) => {
        setCurrentBlog(blog);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentBlog({
            ...currentBlog,
            [name]: value,
        });
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`${process.env.REACT_APP_URL_SERVER}/editBlog/${currentBlog.id}`, currentBlog);
            fetchBlogs();
            handleCloseModal();
            toast.success("Blog Updated Successfully!");
        } catch (error) {
            console.error('Error updating blog:', error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <Container className="mt-3 mb-3">
            <h1>Blogs Managments</h1>
            {loading ? ( // Display the spinner when loading is true
                <div className='spinner-container'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                 <div className="contact-table-base">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className='header-table'>Title</th>
                            <th className='header-table'>Author</th>
                            <th className='header-table'>Date</th>
                            <th className='header-table'>Time</th>
                            <th className='header-table'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog) => (
                            <tr key={blog.id}>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>{blog.date}</td>
                                <td>{blog.time}</td>
                                <td>
                                    <Button variant="warning" onClick={() => handleShowModal(blog)}>
                                        Edit
                                    </Button>{' '}
                                    <Button variant="danger" onClick={() => handleDelete(blog.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                 </div>
            )}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={currentBlog.title}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                name="author"
                                value={currentBlog.author}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formImgUrl">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                name="imgurl"
                                value={currentBlog.imgurl}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="description"
                                value={currentBlog.description}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formQuote">
                            <Form.Label>Quote</Form.Label>
                            <Form.Control
                                type="text"
                                name="quote"
                                value={currentBlog.quote}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ManageBlogs;

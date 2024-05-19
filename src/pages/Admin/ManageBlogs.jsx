import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

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

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:3001/getAllBlogs');
            setBlogs(response.data.blogs);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/deleteBlog/${id}`);
            setBlogs(blogs.filter(blog => blog.id !== id));
            toast.success("Car Added Successfully!");
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
            await axios.put(`http://localhost:3001/editBlog/${currentBlog.id}`, currentBlog);
            fetchBlogs();
            handleCloseModal();
            toast.success("Car Added Successfully!");
        } catch (error) {
            console.error('Error updating blog:', error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <Container>
            <h1>Manage Blogs</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Actions</th>
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

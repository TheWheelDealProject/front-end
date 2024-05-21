import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const AddBlog = () => {
    const [blogData, setBlogData] = useState({
        title: '',
        author: '',
        imgurl: '',
        description: '',
        quote: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData({
            ...blogData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Automatically set the date and time
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
        const formattedTime = currentDate.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
        });

        const blogPostData = {
            ...blogData,
            date: formattedDate,
            time: formattedTime,
        };

        try {
            const response = await axios.post(`${process.env.REACT_APP_URL_SERVER}/addBlog`, blogPostData);
            console.log('Blog added successfully:', response.data);
            toast.success("Blog Added Successfully!");
            setBlogData({
                title: '',
                author: '',
                imgurl: '',
                description: '',
                quote: '',
            })
        } catch (error) {
            console.error('Error adding blog:', error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <Container>
            <h1>Add Blog</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={blogData.title}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        name="author"
                        value={blogData.author}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formImgUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="imgurl"
                        value={blogData.imgurl}
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
                        value={blogData.description}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formQuote">
                    <Form.Label>Quote</Form.Label>
                    <Form.Control
                        type="text"
                        name="quote"
                        value={blogData.quote}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 mb-3">
                    Add Blog
                </Button>
            </Form>
        </Container>
    );
};

export default AddBlog;

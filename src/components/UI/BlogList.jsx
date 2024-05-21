import React, { useEffect, useState } from "react";
import { Col, Spinner } from "reactstrap";
import "../../styles/blog-item.css";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { Form, Row } from "react-bootstrap";
import BlogItem from "./BlogItem"; 

const BlogList = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    try {
      axios.get("http://localhost:3001/getAllBlogs").then((response) => {
        setBlogData(response.data.blogs);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBlogs = blogData.filter((blog) =>
    blog.title && blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Row className="mb-5">
        <Col lg="12">
          <Form>
            <Form.Group className="d-flex align-items-center gap-3">
              <div className="input-group search-container">
                <Form.Control
                  type="text"
                  placeholder="Search a blog..."
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      {loading ? (
        <div className="blog__item">
          <div className="spinner-container">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </div>
      ) : (
        <>
          {filteredBlogs.map((item) => (
            <BlogItem item={item} key={item.id} />
          ))}
        </>
      )}
    </>
  );
};

export default BlogList;
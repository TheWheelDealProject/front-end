import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
// import commentImg from "../../src/assets/all-images/comments-img/ava-img2.png";
import images from '../../src/utils/importImages';

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogDetails = () => {
  const { id } = useParams();

  const [blogData, setBlogData] = useState([])
  const [commentData, setCommentData] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3001/getAllBlogs")
      .then((Response) => {
        setBlogData(Response.data.blogs)

      })
      .catch((error) => { console.error(error) })
  }, []);

  const blog = blogData.filter((blog) => blog.title === (id));

  useEffect(() => {
    axios
      .get("http://localhost:3001/getAllComments")
      .then((response) => {
        setCommentData(response.data.comments);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const comment = e.target.comment.value;

    const commentData = {
      firstname: fullName,
      email: email,
      comment: comment,
    };

    axios
      .post("http://localhost:3001/addComment", commentData)
      .then((response) => {
        console.log(response.data);
        toast.success("Comment Posted Successfully");
        axios
          .get("http://localhost:3001/getAllComments")
          .then((response) => {
            setCommentData(response.data.comments);
          })
          .catch((error) => {
            console.error(error);
          });
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);


  // Array of image filenames
  // const imageFilenames = [
  //   "ava-img1.webp",
  //   "ava-img2.png",
  //   "ava-img3.png",
  //   "ava-img4.png",
  //   "ava-img5.png",
  //   "ava-img6.png",
  //   "ava-img7.png",
  //   "ava-img8.png",
  //   "ava-img9.png",
  //   "ava-img10.jpg",
  // ];


  // const getRandomImage = () => {
  //   const randomIndex = Math.floor(Math.random() * imageFilenames.length);
  //   return imageFilenames[randomIndex];
  // };

  //
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const getRandomImages = () => {
      const shuffledImages = [...images];
      for (let i = shuffledImages.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledImages[i], shuffledImages[randomIndex]] = [
          shuffledImages[randomIndex],
          shuffledImages[i],
        ];
      }
      return shuffledImages.slice(0, commentData.length);
    };

    setRandomImages(getRandomImages());
  }, [commentData, images]);

  //
  return (
    <Helmet title={blog[0]?.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">

                <img src={blog[0]?.imgurl} alt="" className="w-100" />

                <h2 className="section__title mt-4">{blog[0]?.title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i className="ri-user-line"></i> {blog[0]?.author}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-calendar-line"></i> {blog[0]?.date}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-time-line"></i> {blog[0]?.time}
                  </span>
                </div>

                <p className="section__description">{blog[0]?.description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{blog[0]?.quote}</blockquote>
                </h6>
                <p className="section__description">{blog[0]?.description}</p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">Comments ({commentData.length})</h4>
                {/* 
                {commentData.map((comment, index) => (
                  <div className="single__comment d-flex gap-3" key={index}>
                    {randomImage && <img src={randomImage}  width={80} height={80} alt="Random" />}
                    <div className="comment__content">
                      <h6 className="fw-bold">{comment.firstname}</h6>
                      <p className="section__description mb-0">{comment.date}</p>
                      <p className="section__description">{comment.comment}</p>
                      <span className="replay d-flex align-items-center gap-1">
                        <i className="ri-reply-line"></i> Reply
                      </span>
                    </div>
                  </div>
                ))} */}


                {/* {commentData.map((comment, index) => (
                  <div className="single__comment d-flex gap-3 mt-3 mb-3" key={index}>
                    {randomImages[index] && (
                      <img src={randomImages[index]} width={80} height={80} alt="Random" />
                    )}
                    <div className="comment__content">
                      <h6 className="fw-bold">{comment.firstname}</h6>
                      <p className="section__description mb-0">{comment.date}</p>
                      <p className="section__description">{comment.comment}</p>
                      <span className="replay d-flex align-items-center gap-1">
                        <i className="ri-reply-line"></i> Reply
                      </span>
                    </div>
                  </div>
                ))}
 */}



                {commentData.map((comment, index) => (
                  <div className="single__comment d-flex gap-3 mt-3 mb-3" style={{ borderRadius: "80%" }} key={index}>
                    {randomImages[index] && (
                      <img src={randomImages[index]} width={80} height={80} alt="Random" />
                    )}
                    <div className="comment__content">
                      <h6 className="fw-bold">{comment.firstname}</h6>
                      <p className="section__description mb-0">{comment.date}</p>
                      <p className="section__description">{comment.comment}</p>
                      <span className="replay d-flex align-items-center gap-1">
                        <i className="ri-reply-line"></i> Reply
                      </span>
                    </div>
                  </div>
                ))}

                {/* =============== comment form ============ */}
                <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="section__description">
                    You must sign-in to make or comment a post
                  </p>

                  <Form onSubmit={handleCommentSubmit}>
                    <FormGroup className="d-flex gap-3">
                      <Input type="text" name="fullName" placeholder="Full name" />
                      <Input type="email" name="email" placeholder="Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        name="comment"
                        className="w-100 py-2 px-3"
                        placeholder="Comment..."
                      ></textarea>
                    </FormGroup>

                    <Button type="submit" className="btn comment__btn mt-3">
                      Post a Comment
                    </Button>

                  </Form>
                </div>


              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className=" fw-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (

                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgurl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`}>{item.title}</Link>
                    </h6>
                  </div>

                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};


export default BlogDetails;
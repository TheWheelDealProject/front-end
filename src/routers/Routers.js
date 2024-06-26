import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import AddCar from '../pages/Admin/AddCar';
import ContactDetails from "../pages/Admin/ContactDetails";
import BookingInformation from "../pages/Admin/BookingInformation";
import EditCar from "../pages/Admin/EditCar";

import AddBlog from "../pages/Admin/AddBlog";
import ManageBlogs from '../pages/Admin/ManageBlogs';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:id" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      {/* For Admin Pages */}
      <Route path="/admin/addCar" element={<AddCar />} />
      <Route path="/admin/ContactDetails" element={<ContactDetails />} />
      <Route path="/admin/BookingInformation" element={<BookingInformation />} />
      <Route path="/admin/carDetails" element={<EditCar />} />
      <Route path="/admin/addBlog" element={<AddBlog />} />
      <Route path="/admin/manageBlogs" element={<ManageBlogs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;

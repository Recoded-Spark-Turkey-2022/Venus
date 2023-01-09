import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/Home';
import Footer from '../components/footer/Footer';

import Blogs from '../pages/Blogs';
import ProtectedRoute from './ProtectedRoute';
import SignIn from '../pages/SignIn';
import SingleBlogPage from '../pages/SingleBlogPage';

import About from '../pages/About'
import UserProfile from '../pages/UserProfile';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<ProtectedRoute />}>
          <Route path="" element={<SingleBlogPage />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        <Route path="/userProfile" element={<UserProfile />} />
=======

>>>>>>> 3d0328ad553893423d91befed9ae4978d06fe695
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

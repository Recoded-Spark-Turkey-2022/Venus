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
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

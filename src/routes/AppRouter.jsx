import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/Home';
import Footer from '../components/footer/Footer';
import Signup from '../components/signIn-up/Signup';
import Signin from '../components/signIn-up/Signin';
import Blogs from '../pages/Blogs';
import ProtectedRoute from './ProtectedRoute';

import SingleBlogPage from '../pages/SingleBlogPage';
import WriteBlog from '../pages/WriteBlog';
import About from '../pages/About';
import UserProfile from '../pages/UserProfile';
import Contact from '../pages/Contact';
import NotFound from '../components/Not found/NotFound';

import EditBlogPage from '../pages/EditBlogPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<ProtectedRoute />}>
          <Route path="" element={<SingleBlogPage />} />
        </Route>

        <Route path="/writeblog" element={<WriteBlog />} />
        <Route path="/editblog/:blogId" element={<EditBlogPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/userProfile" element={<UserProfile />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

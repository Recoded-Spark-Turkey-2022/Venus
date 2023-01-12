import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/Home';
import Footer from '../components/footer/Footer';
import Signup from '../components/signIn-up/Signup';
import Signin from '../components/signIn-up/Signin';
import Blogs from '../pages/Blogs';
import ProtectedRoute from './ProtectedRoute';
import SignIn from '../pages/SignIn';
import SingleBlogPage from '../pages/SingleBlogPage';
import About from '../pages/About';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<ProtectedRoute />}>
          <Route path="" element={<SingleBlogPage />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/about" element={<About />} />
        
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

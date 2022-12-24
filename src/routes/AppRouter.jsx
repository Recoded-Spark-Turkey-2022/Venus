import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Footer from '../components/footer/Footer';
import Blogs from '../pages/Blogs';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

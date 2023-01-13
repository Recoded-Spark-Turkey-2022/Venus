import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../SignupForm/SignupForm';
import img from '../../assets/signup-vector.svg';
import './Signup-in.css';

const Signup = () => {
  return (
    <section className=" h-[100vh] relative  overflow-hidden mb-300px md:mb-0 w-full md:h-screen  flex justify-center items-center">
      <div>
        <img
          src={img}
          className="absolute image-hero rotate-90 md:rotate-0 z-0 left-[-500px] md:left-[-200px] lg:left-[-300px] xl:left-[-400px] 2xl:left-[-600px] top-[-20px]  w-[100%] h-[110%]"
          alt="circle-logo"
        />
        <div className="ContainerBox">
          <h1 className="Title">SIGN UP WITH</h1>
          <SignUpForm />
          <div className="ContainerBtn">
            <button className="GoogleBtn" type="button">
              <ion-icon size="large" name="logo-google" />
            </button>
            <h1 className="or">OR</h1>
            <button className="FacebookBtn" type="button">
              <ion-icon size="large" className="" name="logo-facebook" />
            </button>
          </div>
          <div className="Container3">
            <h1 className="Already ">Already a member?</h1>
            <Link to="/signin">
              <button className="LastBtm" type="button">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

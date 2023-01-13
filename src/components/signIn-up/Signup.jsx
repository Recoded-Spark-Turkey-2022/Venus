import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../SignupForm/SignupForm';
import img from '../../assets/signup-vector.svg';
import './Signup-in.css';

const Signup = () => {
  return (
    <section className=" h-[110vh]  mb-300px md:mb-0 w-screen md:h-screen relative flex justify-center items-center">
      <div>
        <img
          src={img}
          className="absolute image-hero z-0 left-[-500px] md:left-[-200px] lg:left-[-300px] xl:left-[-400px] 2xl:left-[-600px] top-[0px]  w-[100%] h-[90vh]"
          alt="circle-logo"
        />
        <div className="ContainerBox">
          <h1 className="Title">SIGN UP WITH</h1>
          <SignUpForm/>
          <div className="ContainerBtn">
            <button className="GoogleBtn" type="button">
              <ion-icon size="large" name="logo-google" />
            </button>
            <h1 className="or">OR</h1>
            <button className="FacebookBtn" type="button">
              <ion-icon size="large" className="" name="logo-facebook" />
            </button>
          </div>
          <div className="Container3 ">
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

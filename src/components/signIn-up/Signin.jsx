import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '../SigninForm/SigninForm';
import img from '../../assets/signup-vector.svg';
import './Signup-in.css';

const Signin = () => {
  return (
    <section className=" h-[100vh] relative  overflow-hidden mb-300px md:mb-0 w-full md:h-screen  flex justify-center items-center">
      <div>
        <img
          src={img}
          className=" absolute image-hero  z-0 left-[-500px] md:left-[-200px] lg:left-[-300px] xl:left-[-400px] 2xl:left-[-600px] top-[-20px]  w-[100%] h-[110%]"
          alt="circle-logo"
        />
        <div className="ContainerBox">
          <h1 className="Title">SIGN IN WITH</h1>
          <SignInForm />
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
            <h1 className="Already ">Want to be a member?</h1>
            <Link to="/signup">
              <button className="LastBtm" id="" type="button">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;

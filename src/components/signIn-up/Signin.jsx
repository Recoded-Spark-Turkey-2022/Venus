import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';
import SignInForm from '../SigninForm/SigninForm';
import img from '../../assets/signup-vector.svg';
import './Signup-in.css';
import SocialLinks from './SocialLinks';

const Signin = () => {
  const { t } = useTranslation();
  return (
    <motion.section className=" h-[120vh] relative  overflow-hidden mb-300px md:mb-0 w-full md:h-screen  flex justify-center items-center">
      <div className="w-[90%] md:w-auto">
        <img
          src={img}
          className=" absolute image-hero  z-0 left-[-500px] md:left-[-200px] lg:left-[-300px] xl:left-[-400px] 2xl:left-[-600px] top-[-20px]  w-[100%] h-[110%]"
          alt="circle-logo"
        />
        <motion.div
          initial={{ y: -500 }}
          transition={{
            duration: 0.7,

            delayChildren: 20,
            staggerChildren: 0.5,
          }}
          whileInView={{ y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          className="ContainerBox"
        >
          <h1 className="Title">{t('Signin.Signin-with')}</h1>
          <SignInForm />
          <SocialLinks />
          <div className="Container3 ">
            <h1 className="Already ">{t('Signin.newMember')}</h1>
            <Link to="/signup">
              <button className="LastBtm" id="" type="button">
                {t('Button.su')}
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      <ToastContainer transition={Flip} limit={3} />
    </motion.section>
  );
};

export default Signin;

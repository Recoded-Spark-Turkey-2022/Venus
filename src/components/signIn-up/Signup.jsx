import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignUpForm from '../SignupForm/SignupForm';
import img from '../../assets/signup-vector.svg';

import SocialLinks from './SocialLinks';

const Signup = () => {
  const { t } = useTranslation();
  return (
    <section className=" h-[120vh] relative  overflow-hidden mb-300px md:mb-0 w-full md:h-screen  flex justify-center items-center">
      <div>
        <img
          src={img}
          className="absolute image-hero rotate-90 md:rotate-0 z-0 left-[-500px] md:left-[-200px] lg:left-[-300px] xl:left-[-400px] 2xl:left-[-600px] top-[-20px]  w-[100%] h-[110%]"
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
          <h1 className="Title">{t('Signup.Signup-with')}</h1>
          <SignUpForm />
          <SocialLinks />
          <div className="Container3">
            <h1 className="Already ">{t('Signup.alreadyMember')}</h1>
            <Link to="/signin">
              <button className="LastBtm" type="button">
                {t('Button.si')}
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Signup;

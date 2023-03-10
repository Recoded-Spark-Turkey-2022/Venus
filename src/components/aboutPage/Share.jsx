import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Flip, ToastContainer} from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { selectUserLoggedIn } from '../../features/userSlice/userSlice';
import Button from '../UI/Button';
import shareStory from '../../assets/shareStory.svg';

function Share({onClick}) {
  const { t } = useTranslation();
  const isUserLoggedIn = useSelector(selectUserLoggedIn);

  return (
    <motion.div
      initial={{ scale: 0.5 }}
      transition={{
        duration: 0.7,
      }}
      whileInView={{ scale: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col"
    >
      <div>
        <img src={shareStory} alt="/" className="m-auto pt-6 pb-6" />
      </div>
      <div className="self-center">
        <h2 className="text-center text-darkBlue md:text-4xl leading-[46px] pb-6 font-light text-[20px]">
          {t('About.your-story')}
        </h2>
        <div className="text-center max-w-[558px] m-auto">
          <p className=' text-[18px] font-["Roboto"] ml:text-[30px] sm:w-full '>
            {t('About.your-story-paragraph')}
          </p>
        </div>
      </div>
      <div className=" self-center">
      {isUserLoggedIn && (
              <button
              onClick={onClick}
                id="mediumBlue-button"
                className="px-8 py-1 whitespace-nowrap rounded-full"
                type="button"
              >
                {t('Button.su')}
              </button>
            )}
        {!isUserLoggedIn && (
        <Link to="/signin">
          <Button>{t('Button.su')}</Button>
        </Link>
        )}
      </div>
      <ToastContainer transition={Flip} limit={3} />
    </motion.div>
  );
}

export default Share;

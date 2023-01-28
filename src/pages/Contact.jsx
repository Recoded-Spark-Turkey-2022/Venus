import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import ContactForm from '../components/contact form/ContactForm';
import Container from '../components/UI/Container';
import man from '../assets/concact.svg';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div id="contact-div" className=" mt-10 ">
      <Container>
        <motion.div
          initial={{ scale: 0.5 }}
          transition={{
            duration: 0.7,
            delayChildren: 100,
            staggerChildren: 0.5,
          }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2  gap-6 pt-12 md:p-20"
        >
          <motion.div
            initial={{ x: -200 }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
            whileInView={{ x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="grid justify-items-center md:justify-items-start"
          >
            <h1 className="text-darkBlue text-center md:text-left text-5xl font-bold mb-5">
              {t('Contact.title')}
            </h1>
            <p className="text-center md:text-left text-darkGrey text-m mb-8">
              {t('Contact.paragraph')}
            </p>
            <div className="grid justify-items-start md:justify-items-center w-full md:w-2/3">
              <ContactForm />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            transition={{
              duration: 0.7,
              delay: 1,
            }}
            whileInView={{ x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="flex justify-center items-center row-end-1 md:col-end-3"
          >
            <img src={man} alt="Bannerimage" />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Contact;

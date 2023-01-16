/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef } from 'react';
import { Flip, toast, ToastContainer } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';

import Twitter from '../../assets/Twitter.svg';
import instagram from '../../assets/Instagram.svg';
import facebook from '../../assets/Facebook.svg';

// import db(app) from firebase...........................

function ContactForm() {
  const emailInput = useRef();
  const messageInput = useRef();
  // const [email, setEmail]=useState('');
  // const [message, setMessage]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const collectionRef = collection(db, 'contactData');
      await addDoc(collectionRef, {
        email: emailInput.current.value,
        message: messageInput.current.value,
      });
      toast.success(
        'Your message has been recieved, We will keep in touch with you !',
        {
          position: 'top-left',

          autoClose: 4000,

          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          hideProgressBar: true,
          theme: 'light',
          className: 'thanks-tooltip mt-12',
        }
      );
    } catch (error) {
      console.log(error);
    }

    e.target.reset();
  };
  return (
    <div className="w-full">
      <form
        name="contact"
        className="flex flex-col justify-center md:justify-start mt-5 "
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className="text-darkGrey mb-2">
          Email
        </label>
        <input
          type="email"
          required
          id="email"
          ref={emailInput}
          placeholder="Email"
          className="border-1 p-2 rounded-md border m-0 border-darkGrey bg-slate-50"
        />

        <label htmlFor="message-box" className="text-darkGrey mb-2 mt-6">
          Message
        </label>
        <textarea
          ref={messageInput}
          required
          id="message"
          className="border-1 p-2 outline-none rounded-md border max-h-[200px] border-darkGrey bg-slate-50 h-40"
          placeholder="Message"
        />
        <div className="flex justify-center md:justify-start items-center">
          <button
            type="submit"
            id="mediumBlue-button"
            className="w-32 rounded-full mt-5 whitespace-nowrap py-2"
          >
            Send
          </button>
        </div>
      </form>
      <div className="flex justify-center md:justify-start">
        <button type="button" className="mt-5">
          <img src={Twitter} alt="Twitter-logo" />
        </button>
        <button type="button" className="mt-5 pl-4">
          <img src={instagram} alt="Instagram-logo" />
        </button>
        <button type="button" className="mt-5 pl-4">
          <img src={facebook} alt="Facebook-logo" />
        </button>
      </div>
      <ToastContainer limit={3} transition={Flip} />
    </div>
  );
}
export default ContactForm;
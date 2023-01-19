import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { authentication } from '../../firebase/firebase.config';

const SignInForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const userCredential = signInWithEmailAndPassword(
        authentication,
        data.email,
        data.password
      );
      const { user } = await userCredential;
      if (user) {
        navigate('/', { replace: true });
      }
    } catch (error) {
      console.log(error);
      toast.error('Bad User Credentials 😔', {
        position: 'top-left',
        autoClose: 1200,
        className: 'mt-20',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <form
      className="flex flex-col gap-4 items-center justify-center pt-2 pb-10 md:py-3   rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        placeholder="Your Email"
        {...register('email', {
          required: 'Email Address is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        })}
        className="border border-gray-300  w-full md:w-[80%]  px-0 md:px-3 m-0 py-1 md:py-2 text-gray-900 placeholder-gray-500 rounded"
        aria-invalid={errors.email ? 'true' : 'false'}
      />
      {errors.email && <p role="alert">{errors.email?.message}</p>}
      <input
        type="password"
        placeholder="Password"
        {...register('password', { required: true, minLength: 6 })}
        className="border border-gray-300 px-0 md:px-3 py-1 md:py-2 text-gray-900 m-0 placeholder-gray-500 rounded w-full md:w-[80%]"
        aria-invalid={errors.password ? 'true' : 'false'}
      />
      {errors.password?.type === 'required' && (
        <p role="alert">min 6 character ! </p>
      )}
      <button
        type="submit"
        id="mediumBlue-button"
        className="px-8 whitespace-nowrap w-full md:w-44 rounded-2xl py-2 md:py-1 flex justify-center items-center"
      >
        {t("Button.si")}
      </button>
    </form>
  );
};
export default SignInForm;

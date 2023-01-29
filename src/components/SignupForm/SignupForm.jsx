import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { authentication, db } from '../../firebase/firebase.config';
import { setUserLoggedIn } from '../../features/userSlice/userSlice';

const SignUpForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userCredential = createUserWithEmailAndPassword(
        authentication,
        data.email,
        data.password
      );
      const { user } = await userCredential;
      dispatch(
        setUserLoggedIn({
          userName: data.name,
          userEmail: data.email,
          isLoggedIn: true,
        })
      );

      // we update user's name with data we got from  the form
      updateProfile(authentication.currentUser, { displayName: data.name });
      const formData = {
        name: data.name,
        email: data.email,
        timeStamo: serverTimestamp(),
      };
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, formData);
      navigate('/', { replace: false });
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong with Registration', {
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
      className="flex flex-col gap-5 lg:gap-4 items-center justify-center py-1 md:py-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="Name"
        maxLength={20}
        {...register('name', {
          required: 'First Name is required',
          maxLength: 20,
          pattern: {
            value: /^[A-Za-İ-i-ö-g-Ğ-z]+$/i,
            message: "That's not a valid name..",
          },
        })}
        aria-invalid={errors.name ? 'true' : 'false'}
        className="border border-gray-300 w-full md:w-[80%] px-0 md:px-3 m-0 py-1 md:py-2 text-gray-900 placeholder-gray-500 rounded"
      />

      {errors.name && <p role="alert">{errors.name?.message}</p>}

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
        className="px-8 whitespace-nowrap w-[65%] md:w-44 rounded-2xl py-2 md:py-1 flex justify-center items-center"
      >
        {t('Button.su')}
      </button>
    </form>
  );
};
export default SignUpForm;

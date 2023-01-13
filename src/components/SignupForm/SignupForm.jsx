import { useForm } from 'react-hook-form';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
      {/* {errors.name?.type === 'required' && (
        <p role="alert">{errors.name?.message}</p>
      )} */}
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
        className="px-8 whitespace-nowrap w-full md:w-44 rounded-2xl py-2 md:py-1 flex justify-center items-center"
      >
        Sign Up
      </button>
    </form>
  );
};
export default SignUpForm;

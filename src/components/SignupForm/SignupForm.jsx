import { useForm } from 'react-hook-form';

const SignUpForm = () => {
  const { register, handleSubmit } = useForm();

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
        {...register('name', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
        className="border border-gray-300 w-full md:w-[80%] px-0 md:px-3 m-0 py-1 md:py-2 text-gray-900 placeholder-gray-500 rounded"
      />
      <input
        placeholder="Your Email"
        {...register('email', { required: true })}
        className="border border-gray-300  w-full md:w-[80%]  px-0 md:px-3 m-0 py-1 md:py-2 text-gray-900 placeholder-gray-500 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        {...register('password', { required: true, minLength: 6 })}
        className="border border-gray-300 px-0 md:px-3 py-1 md:py-2 text-gray-900 m-0 placeholder-gray-500 rounded w-full md:w-[80%]"
      />
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

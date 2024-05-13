// SignUpForm.js
import React from 'react';

function SignUpForm() {
  return (
    <form action="" method="" className="mt-8 md:flex md:max-w-lg md:mx-auto">
      <div className="relative">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email address"
          className="peer px-8 pt-5 pb-3 w-full placeholder-transparent rounded-full flex-grow md:rounded-r-none"
        />
        <label
          htmlFor="email"
          className="absolute text-gray-700 left-8 top-2 font-bold text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:font-bold peer-focus:text-xs cursor-text transition-all"
        >
          Email address
        </label>
      </div>
      <button
        type="submit"
        className="mt-4 bg-pink-800 text-white uppercase font-bold text-sm text-center w-full px-8 h-14 rounded-full md:mt-0 md:rounded-l-none md:w-48"
      >
        Sign up
      </button>
    </form>
  );
}

export default SignUpForm;

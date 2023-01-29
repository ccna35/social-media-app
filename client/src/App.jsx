import { useState } from "react";
import "./App.css";
import LoginForm from "./components/Forms/LoginForm";
import SignUpForm from "./components/Forms/SignUpForm";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="mb-8 md:col-span-1 text-center">
        <div className="logo-group flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#4f46e5"
            viewBox="0 0 24 24"
            strokeWidth="0"
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
            />
          </svg>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl uppercase">
            socialo
          </h1>
        </div>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          At Socialo we believe that everyone has the right to communicate with
          his friends, family, or other prople from different parts of the
          world.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setShowLoginForm(false)}
          >
            Sign up
          </button>
          <button
            className="text-base font-semibold leading-7 text-gray-900"
            onClick={() => setShowLoginForm(true)}
          >
            Sign in <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      {showLoginForm ? <LoginForm /> : <SignUpForm />}
    </div>
  );
}

export default App;

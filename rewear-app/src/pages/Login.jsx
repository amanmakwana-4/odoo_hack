// src/pages/LoginPage.jsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const {
    loginWithRedirect,
    isAuthenticated,
    isLoading,
    error,
  } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              className="w-32 mx-auto"
              alt="Logo"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Log In</h1>
            <div className="w-full flex-1 mt-8">
              {error && (
                <p className="text-red-500 text-sm text-center mb-4">
                  {error.message}
                </p>
              )}
              <div className="mx-auto max-w-xs">
                <button
                  onClick={() => loginWithRedirect()}
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 12H3m6 6l-6-6 6-6" />
                  </svg>
                  <span className="ml-3">Log In with Auth0</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Don’t have an account?{" "}
                  <span
                    onClick={() =>
                      loginWithRedirect({
                        authorizationParams: {
                          screen_hint: "signup",
                        },
                      })
                    }
                    className="border-b border-gray-500 border-dotted cursor-pointer text-indigo-500"
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

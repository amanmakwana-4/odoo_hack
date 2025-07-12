import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { loginWithRedirect, isAuthenticated, error, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated]);

  useEffect(() => {
    loginWithRedirect({
      authorizationParams: { screen_hint: "signup" },
    });
  }, []);

  if (isLoading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Redirecting to Sign Up...</h1>
        {error && (
          <p className="text-red-600 mt-2">
            {error.message.includes("user already exists")
              ? "Email already registered. Redirecting to login..."
              : error.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Signup;

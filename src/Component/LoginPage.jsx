import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   if (!email || !password) {
  //     setError("Please enter email and password");
  //     return;
  //   }

  //   setError("");
    
  // try {
  //     // ارسال البيانات للـ backend
  //     const response = await fetch("http://localhost:3009/users/signin", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();

  //     if (data.message === "success") {
  //       alert("Account created successfully!");
  //       navigate("/");
  //     } else {
  //       setError(data.message); // زي "email already exist" أو "Passwords do not match"
  //     }
  //   }
  // }
  const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    setError("Please enter email and password");
    return;
  }

  setError("");

  try {
    // ارسال البيانات للـ backend
    const response = await fetch("http://localhost:3009/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.message === "Login success") {
      alert("Logged in successfully!");
      navigate("/");
    } else {
      setError(data.message); // زي "Account Not Found" أو "password or email incorrect"
    }
  } catch (err) {
    setError("Server error, please try again later");
    console.error(err);
  }
  
};
    
    // Redirect to home page

  

  const goToRegister = () => {
    navigate("/register");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-title">Login</h2>
        
        {error && <p className="error-message">{error}</p>}
        
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="form-input"
          />
        </div>
        
        <button type="submit" className="login-button">
          Login
        </button>
        
        <p className="register-link">
          Don't have an account?{" "}
          <span onClick={goToRegister} className="link">
            Sign up
          </span>
        </p>
        
        <p className="home-link">
          <span onClick={goToHome} className="link">
            Back to Home
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";


// function RegisterPage({ onRegister }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // Validate inputs
//     if (!name || !email || !password || !confirmPassword) {
//       setError("Please fill in all fields");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     setError("");
    
//     // Call onRegister function from App
//     onRegister(name, email, password);
    
//     // Redirect to home page
//     navigate("/");
//   };

//   const goToLogin = () => {
//     navigate("/login");
//   };

//   const goToHome = () => {
//     navigate("/");
//   };

//   return (
//     <div className="register-container">
//       <form className="register-form" onSubmit={handleRegister}>
//         <h2 className="register-title">Create Account</h2>
//         {error && <p className="error-message">{error}</p>}
        
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your name"
//             className="form-input"
//           />
//         </div>

//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="example@email.com"
//             className="form-input"
//           />
//         </div>

//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="********"
//             className="form-input"
//           />
//         </div>

//         <div className="form-group">
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="********"
//             className="form-input"
//           />
//         </div>

//         <button type="submit" className="register-button">
//           Register
//         </button>

//         <p className="login-link">
//           Already have an account?{" "}
//           <span onClick={goToLogin} className="link">
//             Login
//           </span>
//         </p>

//         <p className="home-link">
//           <span onClick={goToHome} className="link">
//             Back to Home
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default RegisterPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    try {
      // ارسال البيانات للـ backend
      const response = await fetch("http://localhost:3009/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });

      const data = await response.json();

      if (data.message === "success") {
        alert("Account created successfully!");
        navigate("/login");
      } else {
        setError(data.message); // زي "email already exist" أو "Passwords do not match"
      }
    } catch (err) {
      setError("Server error, please try again later");
      console.error(err);
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2 className="register-title">Create Account</h2>
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="form-input"
          />
        </div>

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

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="********"
            className="form-input"
          />
        </div>

        <button type="submit" className="register-button">
          Register
        </button>

        <p className="login-link">
          Already have an account?{" "}
          <span onClick={goToLogin} className="link">
            Login
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
}

export default RegisterPage;
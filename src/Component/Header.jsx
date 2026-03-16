import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ضروري للـ collapse

function Header({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleRegister = () => navigate("/register");
  const handleLogout = () => {
    onLogout();
    navigate("/");
  };
  const goToHome = () => navigate("/");

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: "#FFC4C4", borderRadius: "25px", margin: "10px" }}>
      <div className="container">
        <span 
          className="navbar-brand" 
          onClick={goToHome} 
          style={{ cursor: "pointer", color: "#850E35", fontWeight: "bold", fontSize: "28px" }}
        >
          Fakahany
        </span>

        {/* Hamburger button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(50%) sepia(80%) saturate(600%) hue-rotate(330deg)" }}></span>
        </button>

        {/* Nav items + buttons */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            {["Home","About","Brands","Products","Services","Contact"].map((item, idx) => (
              <li key={idx} className="nav-item">
                <span 
                  className="nav-link" 
                  style={{ cursor: "pointer", color: "#850E35", fontWeight: "500", fontSize: "20px" }}
                  onClick={item === "Home" ? goToHome : null}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="d-flex gap-2 mt-2 mt-lg-0 justify-content-center">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="btn" style={{ backgroundColor: "#e94560", color: "#fff", fontWeight: "500" }}>
                Logout
              </button>
            ) : (
              <>
                <button onClick={handleLogin} className="btn" style={{ backgroundColor: "#FFC4C4", color: "#850E35", border: "1px solid #850E35", fontWeight: "500" }}>
                  Login
                </button>
                <button onClick={handleRegister} className="btn" style={{ backgroundColor: "#850E35", color: "#FCF5EE", fontWeight: "500" }}>
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
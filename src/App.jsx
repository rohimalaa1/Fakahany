import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./Component/Header.jsx";
import Sec1 from "./Component/Sec1.jsx";
import Categories from "./Component/Categories.jsx";
import Products from "./Component/Products.jsx";
import LoginPage from "./Component/LoginPage.jsx";
import RegisterPage from "./Component/Register.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Layout فيه الهيدر + Categories + Products
const MainLayout = ({ isAuthenticated, onLogout }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <Header isAuthenticated={isAuthenticated} onLogout={onLogout} />
      <Sec1 />
      <Categories onSelectCategory={setSelectedCategory} />
      <Products selectedCategory={selectedCategory} />
    </>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    console.log("Login attempt:", email, password);
    setIsAuthenticated(true);
  };

  const handleRegister = (name, email, password) => {
    console.log("Register attempt:", { name, email, password });
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout isAuthenticated={isAuthenticated} onLogout={handleLogout} />
          }
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/" replace /> :
            <LoginPage onLogin={handleLogin} />
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? <Navigate to="/" replace /> :
            <RegisterPage onRegister={handleRegister} />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
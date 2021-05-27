import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Authorization from "components/Authorization";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="Auth">
      <Header />
      <Authorization />
      <Footer />
    </div>
  );
};

export default Auth;

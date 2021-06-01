import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Form from "components/Form";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="Auth">
      <Header />
      <Form autorization />
      <Footer />
    </div>
  );
};

export default Auth;

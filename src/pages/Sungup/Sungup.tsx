import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Form from "components/Form";
import "./Sungup.css";

const Sungup = () => {
  console.log("Sungup");
  return (
    <div className="Auth">
      <Header />
      <Form autorization={false} />
      <Footer />
    </div>
  );
};

export default Sungup;

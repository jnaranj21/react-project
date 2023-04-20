import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import { LoginForm } from "./LoginForm";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <>
      <nav className="navigation">
        <Button
          onClick={showModal}
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
        >
          Sign up
        </Button>

        <Button buttonStyle="btn--outline" buttonSize="btn--medium">
          Log in
        </Button>
        <LoginForm modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      </nav>
    </>
  );
}

export default Navbar;

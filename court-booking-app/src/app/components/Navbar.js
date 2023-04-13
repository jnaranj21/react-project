import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import LoginForm from "./LoginForm";

function Navbar() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123'
  }
  const [user, setUser] = useState({name:'', email:''});
  const [error, setError] = useState('');

  const Login = details => {}
  console.log('Logout');

  return (
    <>
      <nav className="navigation">
        {(user.email != '') ? (
          <div className="welcome"><h2>welcome, <span>{user.name}</span></h2><Button buttonStyle="btn--outline" buttonSize="btn--medium">
          Log out
        </Button></div>) : ( <LoginForm />
        )}
      </nav>
    </>
  );
}

export default Navbar;

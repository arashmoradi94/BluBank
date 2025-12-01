import React from "react";
import "./login.css";
import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";
function Login() {
  return (
    <div className="flex-col , items-center , justify-center">
      <LoginHeader />
      <LoginForm />
    </div>
  );
}

export default Login;

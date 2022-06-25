import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function Register({ history }) {
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.pushState("/");
  }, [user, history]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);

    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    );

    window.localStorage.setItem("emailForRegistration", email);

    setEmail("");
  };

  const registerForm = () => (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        autoFocus
      />
      <br />
      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          <br />
          {registerForm()}
        </div>
      </div>
    </div>
  );
}

export default Register;

import { useEffect, useState } from "react";

import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import "./LogIn.css";
import axios from "axios";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

  // login
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmail(email, password);
    axios.post('login', { email })
      .then(res => console.log(res.data))
  };


  const forgetPassword = () => {
    sendPasswordResetEmail(email);
    notify("send email");
  };
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const notify = (errorToast) => toast(errorToast);
  if (user || googleUser) {
    navigate(from);
  }


  useEffect(() => {
    if (googleError) {
      const err = googleError.message
      notify(err.slice(22, err.length - 2));
    }
  }, [googleError]);
  useEffect(() => {
    if (hookError) {
      const err = hookError.message
      notify(err.slice(22, err.length - 2));
    }
  }, [hookError]);

  return (
    <div className="addNew  ">
      <div className="login-title">LOGIN</div>
      <form className="login-form mx-auto w-50 addForm p-4 mt-5" onSubmit={handleLogin}>
        <input
          className="form-control"
          type="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="form-control mt-3"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="allButton d-block mx-auto m-2">Login</button>

        <p>
          Don't have an account?
          <Link className="sign-up" to="/signup">
            Sign up first
          </Link>
        </p>
      </form>

      <button className="allButton mb-5" onClick={() => signInWithGoogle()}>
        Google
      </button>
      <button
        className="allButton mb-5 btn"
        onClick={forgetPassword}
        disabled={!email.length}
      >
        Forget Password
      </button>
    </div>
  );
};

export default LogIn;

import { useEffect, useState } from "react";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const SignUp = () => {
    // state set 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const notify = (errorToast) => toast(errorToast);

    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleLogin = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            notify("password does not match");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        if (hookError) {

            const err = hookError.message
            notify(err.slice(22, err.length - 2));
        }
    }, [hookError]);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="addNew ">
            <div className="login-container my-5">
                <div className="container">
                    <div className="text-center">
                    <div className="login-title my-1 text-secondary fw-bold fs-1 bg-dark  p-2 d-inline-block ">SignUp</div>
                    </div>
                    <form className="login-form mx-auto w-50 addForm p-4 mt-5" onSubmit={handleLogin}>
                        <input
                            className="w-50"
                            type="text"
                            placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div className="relative">
                            <input
                                className="w-50 mt-3"
                                type="password"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <input
                            className="w-50 mt-3"
                            type="password"
                            placeholder="confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                        <button className='animated-button mt-3' type="submit"> <span className="py-2"> Sign Up</span> </button>

                        <ToastContainer />
                        <p className="fw-bold ">
                            Already have an account?
                            <Link className="login px-2 text-decoration-none" to="/login">
                                Log in
                            </Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;

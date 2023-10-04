"use client"
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LogIn = () => {
    const session = useSession()
    const router = useRouter()
    if (session.status === "loading") {
        return <div className=" flex items-center justify-center">
            <span className="loading loading-ball loading-lg"></span>

        </div>
    }
    if (session.status === "authenticated") {
        router?.push("/dashboard")
    }
    const [err, setErr] = useState()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");

        signIn("credentials", {email, password})
        event.target.reset();
    }
    return (
        <div className="flex justify-center items-center">
            <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <button onClick={() => signIn("google")} className="btn bg-gray-600 text-white"><FontAwesomeIcon icon={faGoogle} style={{ color: "#fff700", }} />Login with Google</button>
                </form>
                {
                    err && <p>Something went wrong!</p>
                }
            </div>
        </div>
    );
};

export default LogIn;
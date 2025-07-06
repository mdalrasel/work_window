import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash,} from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const LogIn = () => {
    const { logIn,googleLogIn } = use(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
            .then(() => {
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
        .then(() => {
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className=" p-8 rounded-xl border shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <label className="block mb-1  font-medium">Email :</label>
                    <input
                        type="email"
                        placeholder="Email"
                        name='email'
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <label className="block mb-1  font-medium">Password :</label>
                    <div className='relative'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            name='password'
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <button
                            type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute top-3 right-4 text-xl'

                        >{showPassword ? <FaEye /> : <FaEyeSlash />}</button>
                    </div>
                    <span className="text-red-500 text-sm">{ }</span>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
                    >
                        Login
                    </button>
                </form>

                <div className="my-4 text-center text-gray-500">OR</div>

                <div className=" mb-4">
                    <button onClick={() => handleGoogleLogIn()} className="btn w-full bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LogIn;

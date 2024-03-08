import React, { useState } from 'react';
import axios from 'axios';
import "./login.css"
import { GoogleLogin,GoogleOAuthProvider } from '@react-oauth/google';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

   
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setErrors({ message: 'Email and password are required' });
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/api/login', formData);
            console.log(response.data);
            alert("Login successful");
            window.location.replace("/");

        } catch (error) {
            console.error('Error logging in:', error);
            alert("Invalid email or password");
        }
    };

    return (
        <section className='login p-20' >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white border rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                             Login
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                />
                            </div>
                            {errors.message && (
                                <p className="text-red-500 text-sm">{errors.message}</p>
                            )}

                            <button
                                type="submit"
                                className="w-full text-white bg-[#3b5998] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Login
                            </button>


                            <GoogleOAuthProvider clientId="1049586068495-ttjv8g7h3tp64mah2oukatagl4p29hem.apps.googleusercontent.com">
                            <GoogleLogin
                                      onSuccess={credentialResponse => {
                                      console.log(credentialResponse);
                                      }}
                                        onError={() => {
                                        console.log('Login Failed');
                                      }}
                                        
                            />
                            </GoogleOAuthProvider>



                            <p className="text-sm text-center font-medium text-gray-500 dark:text-black">
                                New to MyApp?{' '}
                                <a
                                    href="/signup"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign Up
                                </a>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;

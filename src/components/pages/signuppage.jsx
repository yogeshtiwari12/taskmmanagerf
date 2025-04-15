import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log('Signup attempt:', formData);
    };

    return (
        <div className="min-h-screen bg-blue-100 to-blue-100 flex items-center justify-center p-4 outline">
            <div 
                className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8"
                style={{
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                }}
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-800">Create Account</h1>
                    <p className="text-blue-600/80 mt-2">Join us to start managing your tasks</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-3 outline-none rounded-lg border border-blue-200 focus:ring-1 focus:ring-blue-400 focus:border-transparent transition duration-200 bg-white/50"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    <div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 outline-none py-3 rounded-lg border border-blue-200 focus:ring-1 focus:ring-blue-400 focus:border-transparent transition duration-200 bg-white/50"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-3 outline-none rounded-lg border border-blue-200 focus:ring-1 focus:ring-blue-400 focus:border-transparent transition duration-200 bg-white/50"
                            placeholder="Create a password"
                            required
                        />
                    </div>

              

                    <div className="flex items-center">
                        <input
                            id="terms"
                            type="checkbox"
                            className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-blue-300 rounded"
                            required
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-blue-700">
                            I agree to the{' '}
                            <a href="#" className="text-blue-600 hover:text-blue-700">
                                Terms and Conditions
                            </a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 outline-none text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                        style={{
                            background: 'linear-gradient(to right, #3b82f6, #60a5fa)',
                        }}
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-center mt-6 text-blue-600/80">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;

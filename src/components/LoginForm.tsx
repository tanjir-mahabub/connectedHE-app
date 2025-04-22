import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type FormData = {
    email: string;
    password: string;
};

type Errors = {
    email?: string;
    password?: string;
};

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
    const [errors, setErrors] = useState<Errors>({});
    const [loginSuccess, setLoginSuccess] = useState<boolean | null>(null);
    const navigate = useNavigate(); // 👈

    const validate = () => {
        const newErrors: Errors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            if (formData.email === 'admin@gmail.com' && formData.password === 'admin123') {
                setLoginSuccess(true);
                console.log('Logged in successfully');
                navigate('/dashboard'); // 👈 redirect
            } else {
                setLoginSuccess(false);
                console.log('Invalid credentials');
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl space-y-4"
        >
            <h2 className="text-2xl font-semibold text-center">Login</h2>

            <div className="text-left">
                <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email
                            ? 'border-red-500 focus:ring-red-300'
                            : 'border-gray-300 focus:ring-blue-300'
                        }`}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div className="text-left">
                <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.password
                            ? 'border-red-500 focus:ring-red-300'
                            : 'border-gray-300 focus:ring-blue-300'
                        }`}
                />
                {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
            </div>

            {loginSuccess === true && (
                <p className="text-green-600 text-center">Logged in successfully!</p>
            )}
            {loginSuccess === false && (
                <p className="text-red-600 text-center">Invalid email or password.</p>
            )}

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Log In
            </button>
        </form>
    );
};

export default LoginForm;

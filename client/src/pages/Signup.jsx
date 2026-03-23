import React, { useState } from 'react'
import API from '../services/api'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup = async () => {
        try {
            await API.post("/auth/signup", {
                name: name,
                email: email,
                password: password
            })

            alert("Signup success")
        } catch (err) {
            console.log(err.response?.data)
            alert("Signup failed")
        }
    }

    return (
        <div className="min-h-screen flex">

            {/* LEFT SIDE */}
            <div className="hidden md:flex w-1/2 bg-black text-white flex-col justify-center items-center">
                <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                    Notes AI
                </h1>
                <p className="text-gray-400 text-center px-10">
                    Join now and start organizing your ideas smarter 🚀
                </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-900">

                <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-[350px] border border-gray-700">

                    <h2 className="text-2xl font-bold text-white text-center mb-6">
                        Create Account ✨
                    </h2>

                    {/* Name */}
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full mb-3 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        onChange={(e) => setName(e.target.value)}
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full mb-3 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full mb-4 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Button */}
                    <button
                        onClick={handleSignup}
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold hover:opacity-90 transition"
                    >
                        Signup
                    </button>

                    {/* Link */}
                    <p className="text-sm text-center mt-4 text-gray-400">
                        Already have an account?{" "}
                        <Link to="/login" className="text-pink-400 hover:underline">
                            Login
                        </Link>
                    </p>

                </div>

            </div>

        </div>
    )
}

export default Signup
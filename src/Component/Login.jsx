// // // // // // // // // // // // // // // // // // import React from "react";

// // // // // // // // // // // // // // // // // // export default function Login() {
// // // // // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // // // // //         <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // // // // // // // // // // // // // // // // //             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
// // // // // // // // // // // // // // // // // //                 <h1 className="text-2xl font-bold mb-6 text-center">Welcome to CodexDev</h1>
// // // // // // // // // // // // // // // // // //                 <form className="space-y-4">
// // // // // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // // // // //                         <label className="block text-gray-700">Email</label>
// // // // // // // // // // // // // // // // // //                         <input
// // // // // // // // // // // // // // // // // //                             type="email"
// // // // // // // // // // // // // // // // // //                             placeholder="hariscodexdev@gmail.com"
// // // // // // // // // // // // // // // // // //                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // // // // // // // // // // // // // // // // //                         />
// // // // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // // // // //                         <label className="block text-gray-700">Password</label>
// // // // // // // // // // // // // // // // // //                         <input
// // // // // // // // // // // // // // // // // //                             type="password"
// // // // // // // // // // // // // // // // // //                             placeholder="Enter your password"
// // // // // // // // // // // // // // // // // //                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // // // // // // // // // // // // // // // // //                         />
// // // // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // // // //                     <div className="flex items-center justify-between">
// // // // // // // // // // // // // // // // // //                         <label className="flex items-center">
// // // // // // // // // // // // // // // // // //                             <input type="checkbox" className="mr-2" /> Remember Me
// // // // // // // // // // // // // // // // // //                         </label>
// // // // // // // // // // // // // // // // // //                         <button className="text-blue-500 hover:underline">Forgot Password?</button>
// // // // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // // // //                     <button
// // // // // // // // // // // // // // // // // //                         type="submit"
// // // // // // // // // // // // // // // // // //                         className="w-full bg-yellow-400 text-white py-2 rounded-lg font-bold hover:#EBCA61 transition"
// // // // // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // // // // //                         Login
// // // // // // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // // // // // //                 </form>
// // // // // // // // // // // // // // // // // //                 <p className="mt-4 text-center">
// // // // // // // // // // // // // // // // // //                     Not registered yet? <span className="text-blue-500 hover:underline">Create an account</span>
// // // // // // // // // // // // // // // // // //                 </p>
// // // // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // // // // // // import avatar from "../assets/avatar.png";

// // // // // // // // // // // // // // // // // export default function Login() {
// // // // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // // // //         <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
// // // // // // // // // // // // // // // // //             {/* Main Box */}
// // // // // // // // // // // // // // // // //             <div className="relative bg-white w-[850px] h-[890px] border-4 border-[#E9C46A] rounded-2xl shadow-lg flex flex-col items-center justify-center">

// // // // // // // // // // // // // // // // //                 {/* Image on Top */}
// // // // // // // // // // // // // // // // //                 <img
// // // // // // // // // // // // // // // // //                     src={avatar}
// // // // // // // // // // // // // // // // //                     alt="user avatar"
// // // // // // // // // // // // // // // // //                     className="absolute w-[222px] h-[238px] top-[66px] rounded-xl shadow-md"
// // // // // // // // // // // // // // // // //                 />

// // // // // // // // // // // // // // // // //                 {/* Form Section */}
// // // // // // // // // // // // // // // // //                 <form className="mt-[320px] w-[400px] space-y-6">
// // // // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // // // //                         <label className="block text-gray-700 mb-2">Email</label>
// // // // // // // // // // // // // // // // //                         <div className="flex items-center border border-gray-300 rounded-lg px-3">
// // // // // // // // // // // // // // // // //                             <span className="text-gray-500 mr-2">📧</span>
// // // // // // // // // // // // // // // // //                             <input
// // // // // // // // // // // // // // // // //                                 type="email"
// // // // // // // // // // // // // // // // //                                 placeholder="hariscodexdev@gmail.com"
// // // // // // // // // // // // // // // // //                                 className="w-full py-2 focus:outline-none"
// // // // // // // // // // // // // // // // //                             />
// // // // // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // // // // //                     </div>

// // // // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // // // //                         <label className="block text-gray-700 mb-2">Password</label>
// // // // // // // // // // // // // // // // //                         <div className="flex items-center border border-gray-300 rounded-lg px-3">
// // // // // // // // // // // // // // // // //                             <span className="text-gray-500 mr-2">🔒</span>
// // // // // // // // // // // // // // // // //                             <input
// // // // // // // // // // // // // // // // //                                 type="password"
// // // // // // // // // // // // // // // // //                                 placeholder="Enter your password"
// // // // // // // // // // // // // // // // //                                 className="w-full py-2 focus:outline-none"
// // // // // // // // // // // // // // // // //                             />
// // // // // // // // // // // // // // // // //                             npm install react-icons

// // // // // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // // // // //                     </div>

// // // // // // // // // // // // // // // // //                     <div className="flex justify-between text-sm text-gray-600">
// // // // // // // // // // // // // // // // //                         <label className="flex items-center">
// // // // // // // // // // // // // // // // //                             <input type="checkbox" className="mr-2" /> Remember Me
// // // // // // // // // // // // // // // // //                         </label>
// // // // // // // // // // // // // // // // //                         <button
// // // // // // // // // // // // // // // // //                             type="button"
// // // // // // // // // // // // // // // // //                             className="text-blue-500 hover:underline focus:outline-none"
// // // // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // // // //                             Forgot Password?
// // // // // // // // // // // // // // // // //                         </button>
// // // // // // // // // // // // // // // // //                     </div>

// // // // // // // // // // // // // // // // //                     <button
// // // // // // // // // // // // // // // // //                         type="submit"
// // // // // // // // // // // // // // // // //                         className="w-full bg-[#E9C46A] text-white py-3 rounded-lg font-semibold hover:bg-[#D4AC55] transition"
// // // // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // // // //                         Login
// // // // // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // // // // //                 </form>

// // // // // // // // // // // // // // // // //                 {/* Footer text */}
// // // // // // // // // // // // // // // // //                 <p className="mt-6 text-gray-700">
// // // // // // // // // // // // // // // // //                     Not registered yet?{" "}
// // // // // // // // // // // // // // // // //                     <span className="text-blue-500 hover:underline cursor-pointer">
// // // // // // // // // // // // // // // // //                         Create an account
// // // // // // // // // // // // // // // // //                     </span>
// // // // // // // // // // // // // // // // //                 </p>
// // // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // // // // // import avatar from "../assets/avatar.png"; // 👈 make sure this file exists inside src/assets/

// // // // // // // // // // // // // // // // export default function Login() {
// // // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // // //         <div className="relative min-h-screen bg-gray-100">
// // // // // // // // // // // // // // // //             {/* Outer Box */}
// // // // // // // // // // // // // // // //             <div className="w-[850px] h-[890px] border border-[#EBCA61] bg-white rounded-2xl absolute top-[115px] left-[535px] shadow-lg">

// // // // // // // // // // // // // // // //                 {/* Inner Box */}
// // // // // // // // // // // // // // // //                 <div className="w-[760px] h-[800px] bg-white shadow-md absolute top-[160px] left-[580px] rounded-2xl"></div>

// // // // // // // // // // // // // // // //                 {/* Avatar */}
// // // // // // // // // // // // // // // //                 <img
// // // // // // // // // // // // // // // //                     src={avatar}
// // // // // // // // // // // // // // // //                     alt="User Avatar"
// // // // // // // // // // // // // // // //                     className="w-[222px] h-[238px] rounded-[16px] absolute top-[66px] left-[845px]"
// // // // // // // // // // // // // // // //                 />

// // // // // // // // // // // // // // // //                 {/* Email Input */}
// // // // // // // // // // // // // // // //                 <input
// // // // // // // // // // // // // // // //                     type="email"
// // // // // // // // // // // // // // // //                     placeholder="hariscodexdev@gmail.com"
// // // // // // // // // // // // // // // //                     className="absolute top-[347px] left-[786px] w-[278px] h-[40px] text-[24px] font-extralight font-[Urbanist] border border-gray-300 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-[#EBCA61]"
// // // // // // // // // // // // // // // //                 />

// // // // // // // // // // // // // // // //                 {/* Login Button */}
// // // // // // // // // // // // // // // //                 <button
// // // // // // // // // // // // // // // //                     className="absolute top-[800px] left-[710px] w-[500px] h-[60px] bg-[#EBCA61] text-white font-bold rounded-lg hover:bg-[#dcb94e] transition"
// // // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // // //                     Login
// // // // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // // // // import avatar from "../assets/avatar.png";

// // // // // // // // // // // // // // // export default function Login() {
// // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // //         <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // // // // // // // // // // // // // //             {/* Main Box */}
// // // // // // // // // // // // // // //             <div className="w-[850px] h-[890px] border border-[#EBCA61] bg-white rounded-2xl shadow-lg flex flex-col items-center p-10">

// // // // // // // // // // // // // // //                 {/* Avatar */}
// // // // // // // // // // // // // // //                 <img
// // // // // // // // // // // // // // //                     src={avatar}
// // // // // // // // // // // // // // //                     alt="User Avatar"
// // // // // // // // // // // // // // //                     className="w-[222px] h-[238px] rounded-[16px] mb-10"
// // // // // // // // // // // // // // //                 />

// // // // // // // // // // // // // // //                 {/* Form */}
// // // // // // // // // // // // // // //                 <form className="w-full max-w-md flex flex-col space-y-6">
// // // // // // // // // // // // // // //                     {/* Email Input */}
// // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // //                         <label className="block text-gray-700 mb-2 text-lg font-semibold">Email</label>
// // // // // // // // // // // // // // //                         <input
// // // // // // // // // // // // // // //                             type="email"
// // // // // // // // // // // // // // //                             placeholder="hariscodexdev@gmail.com"
// // // // // // // // // // // // // // //                             className="w-full h-[50px] px-4 text-[18px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EBCA61]"
// // // // // // // // // // // // // // //                         />
// // // // // // // // // // // // // // //                     </div>

// // // // // // // // // // // // // // //                     {/* Password Input */}
// // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // //                         <label className="block text-gray-700 mb-2 text-lg font-semibold">Password</label>
// // // // // // // // // // // // // // //                         <input
// // // // // // // // // // // // // // //                             type="password"
// // // // // // // // // // // // // // //                             placeholder="Enter your password"
// // // // // // // // // // // // // // //                             className="w-full h-[50px] px-4 text-[18px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EBCA61]"
// // // // // // // // // // // // // // //                         />
// // // // // // // // // // // // // // //                     </div>

// // // // // // // // // // // // // // //                     {/* Login Button */}
// // // // // // // // // // // // // // //                     <button
// // // // // // // // // // // // // // //                         type="submit"
// // // // // // // // // // // // // // //                         className="w-full h-[55px] bg-[#EBCA61] text-white font-bold text-lg rounded-lg hover:bg-[#dcb94e] transition"
// // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // //                         Login
// // // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // // //                 </form>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // // // // import { FaEye, FaEyeSlash } from "react-icons/fa";
// // // // // // // // // // // // // // // import avatar from "../assets/avatar.png";

// // // // // // // // // // // // // // // export default function Login() {
// // // // // // // // // // // // // // //     const [showPassword, setShowPassword] = useState(false);

// // // // // // // // // // // // // // //     const togglePassword = () => setShowPassword(!showPassword);

// // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // //         <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // // // // // // // // // // // // // //             {/* Main Box */}
// // // // // // // // // // // // // // //             <div className="w-[850px] h-[890px] border border-[#EBCA61] bg-white rounded-2xl shadow-lg flex flex-col items-center p-10 ">

// // // // // // // // // // // // // // //                 {/* Avatar */}
// // // // // // // // // // // // // // //                 <img
// // // // // // // // // // // // // // //                     src={avatar}
// // // // // // // // // // // // // // //                     alt="User Avatar"
// // // // // // // // // // // // // // //                     className="w-[222px] h-[238px] rounded-[16px] mb-10"
// // // // // // // // // // // // // // //                 />

// // // // // // // // // // // // // // //                 {/* Form */}
// // // // // // // // // // // // // // //                 <form className="w-full max-w-md flex flex-col space-y-6">
// // // // // // // // // // // // // // //                     {/* Email Input */}
// // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // //                         <label className="block text-gray-700 mb-2 text-lg font-semibold">Email</label>
// // // // // // // // // // // // // // //                         <input
// // // // // // // // // // // // // // //                             type="email"
// // // // // // // // // // // // // // //                             placeholder="hariscodexdev@gmail.com"
// // // // // // // // // // // // // // //                             className="w-full h-[50px] px-4 text-[18px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EBCA61]"
// // // // // // // // // // // // // // //                         />
// // // // // // // // // // // // // // //                     </div>

// // // // // // // // // // // // // // //                     {/* Password Input with Eye Icon */}
// // // // // // // // // // // // // // //                     <div className="relative">
// // // // // // // // // // // // // // //                         <label className="block text-gray-700 mb-2 text-lg font-semibold">Password</label>
// // // // // // // // // // // // // // //                         <input
// // // // // // // // // // // // // // //                             type={showPassword ? "text" : "password"}
// // // // // // // // // // // // // // //                             placeholder="Enter your password"
// // // // // // // // // // // // // // //                             className="w-full h-[50px] px-4 text-[18px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EBCA61]"
// // // // // // // // // // // // // // //                         />
// // // // // // // // // // // // // // //                         <span
// // // // // // // // // // // // // // //                             onClick={togglePassword}
// // // // // // // // // // // // // // //                             className="absolute right-4 top-[45px] text-gray-500 cursor-pointer"
// // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // //                             {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
// // // // // // // // // // // // // // //                         </span>
// // // // // // // // // // // // // // //                     </div>

// // // // // // // // // // // // // // //                     {/* Login Button */}
// // // // // // // // // // // // // // //                     <button
// // // // // // // // // // // // // // //                         type="submit"
// // // // // // // // // // // // // // //                         className="w-full h-[55px] bg-[#EBCA61] text-white font-bold text-lg rounded-lg hover:bg-[#dcb94e] transition"
// // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // //                         Login
// // // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // // //                 </form>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // import React from "react";

// // // // // // // // // // // // // // export default function Login() {
// // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // //         <div>



// // // // // // // // // // // // // //             <div>
// // // // // // // // // // // // // //                 <label>Email:</label>
// // // // // // // // // // // // // //                 <input type="email" placeholder="Enter your email" />
// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             <div>
// // // // // // // // // // // // // //                 <label>Password:</label>
// // // // // // // // // // // // // //                 <input type="password" placeholder="Enter your password" />
// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             <button>Login</button>

// // // // // // // // // // // // // //             <p>
// // // // // // // // // // // // // //                 Not registered yet? <a href="#">Create an account</a>
// // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // }


// // // // // // // // // // // // // import React, { useState } from "react";

// // // // // // // // // // // // // export default function LoginPage() {
// // // // // // // // // // // // //     const [email, setEmail] = useState("");
// // // // // // // // // // // // //     const [password, setPassword] = useState("");

// // // // // // // // // // // // //     const handleLogin = (e) => {
// // // // // // // // // // // // //         e.preventDefault();
// // // // // // // // // // // // //         console.log("Email:", email);
// // // // // // // // // // // // //         console.log("Password:", password);
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     return (
// // // // // // // // // // // // //         <form onSubmit={handleLogin}>
// // // // // // // // // // // // //             <div>
// // // // // // // // // // // // //                 <label>Email:</label>
// // // // // // // // // // // // //                 <input
// // // // // // // // // // // // //                     type="email"
// // // // // // // // // // // // //                     value={email}
// // // // // // // // // // // // //                     onChange={(e) => setEmail(e.target.value)}
// // // // // // // // // // // // //                 />
// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             <div>
// // // // // // // // // // // // //                 <label>Password:</label>
// // // // // // // // // // // // //                 <input
// // // // // // // // // // // // //                     type="password"
// // // // // // // // // // // // //                     value={password}
// // // // // // // // // // // // //                     onChange={(e) => setPassword(e.target.value)}
// // // // // // // // // // // // //                 />
// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             <button type="submit">Login</button>
// // // // // // // // // // // // //         </form>
// // // // // // // // // // // // //     );
// // // // // // // // // // // // import React from 'react'

// // // // // // // // // // // // export default function Login() {
// // // // // // // // // // // //     return (
// // // // // // // // // // // //         <div className='flex iteam-center justify-center min-h-screen bg-gray-100' >
// // // // // // // // // // // //             <div className="bg-white shadow-lg rounded-lg p-8 w-96"  >
// // // // // // // // // // // //                 <div className="mb-4"  >

// // // // // // // // // // // //                     <label lassName="block text-gray-600 mb-2">Email:</label>
// // // // // // // // // // // //                     <input type="email" placeholder="Enter your email" className="w-[278px] h-[29px] bg-white border border-gray-300 px-3 py-2 rounded-md shadow-[0_4px_4px_0_#00000040] focus:outline-none focus:ring-2 focus:ring-blue-400" />

// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <div className='mb-4'>
// // // // // // // // // // // //                     <label className='blog text-grey-600 mb-2'>Password:</label>
// // // // // // // // // // // //                     <input type="password" placeholder="Enter your password" className='"w-full bg-white border border-gray-300 px-3 py-2 rounded-md shadow-[0_4px_4px_0_#00000040] focus:outline-none focus:ring-2 focus:ring-blue-400"' />
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <div>
// // // // // // // // // // // //                     <button>Login</button>


// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //     )
// // // // // // // // // // // // }


// // // // // // // // // // // import React from "react";
// // // // // // // // // // //  import { IconsManifest } from "react-icons";


// // // // // // // // // // // export default function Login() {
// // // // // // // // // // //     return (
// // // // // // // // // // //         <div className="flex items-center justify-center min-h-screen bg-gray-100">
// // // // // // // // // // //             <div className="bg-white shadow-lg rounded-lg p-8 w-[400px]">

// // // // // // // // // // //                 {/* Email Field */}
// // // // // // // // // // //                 <div className="mb-4">
// // // // // // // // // // //                     <label className="block text-gray-600 mb-2">Email:</label>
// // // // // // // // // // //                     <i class="fa-solid fa-user"></i>
// // // // // // // // // // //                     <input
// // // // // // // // // // //                         type="email"
// // // // // // // // // // //                         placeholder="Enter your email"
// // // // // // // // // // //                         className="w-[278px] h-[29px] bg-white border border-gray-300 px-3 py-2 rounded-md shadow-[0_4px_4px_0_#00000040] focus:outline-none focus:ring-2 focus:ring-blue-400"
// // // // // // // // // // //                     />
// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 {/* Password Field */}
// // // // // // // // // // //                 <div className="mb-4">
// // // // // // // // // // //                     <label className="block text-gray-600 mb-2">Password:</label>
// // // // // // // // // // //                     <input
// // // // // // // // // // //                         type="password"
// // // // // // // // // // //                         placeholder="Enter your password"
// // // // // // // // // // //                         className="w-[278px] h-[29px] bg-white border border-gray-300 px-3 py-2 rounded-md shadow-[0_4px_4px_0_#00000040] focus:outline-none focus:ring-2 focus:ring-blue-400"
// // // // // // // // // // //                     />
// // // // // // // // // // //                 </div>

// // // // // // // // // // //             </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //     );
// // // // // // // // // // // }

// // // // // // // // // // import React from "react";
// // // // // // // // // // import { FaUser, FaLock } from "react-icons/fa";

// // // // // // // // // // export default function Login() {
// // // // // // // // // //     return (
// // // // // // // // // //         <div className="flex items-center justify-center min-h-screen bg-gray-100">
// // // // // // // // // //             <div className="bg-white shadow-lg rounded-lg p-8 w-[400px]">

// // // // // // // // // //                 {/* Email Field */}
// // // // // // // // // //                 <div className="mb-4 flex items-center border border-gray-300 rounded-md px-3 py-2">
// // // // // // // // // //                     <FaUser size={20} className="text-gray-400 mr-2" />
// // // // // // // // // //                     <input
// // // // // // // // // //                         type="email"
// // // // // // // // // //                         placeholder="Enter your email"
// // // // // // // // // //                         className="w-full h-[29px] bg-white focus:outline-none"
// // // // // // // // // //                     />
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {/* Password Field */}
// // // // // // // // // //                 <div className="mb-4 flex items-center border border-gray-300 rounded-md px-3 py-2">
// // // // // // // // // //                     <FaLock size={20} className="text-gray-400 mr-2" />
// // // // // // // // // //                     <input
// // // // // // // // // //                         type="password"
// // // // // // // // // //                         placeholder="Enter your password"
// // // // // // // // // //                         className="w-full h-[29px] bg-white focus:outline-none"
// // // // // // // // // //                     />
// // // // // // // // // //                     <i className="fa-solid fa-eye"></i>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {/* Login Button */}
// // // // // // // // // //                 <button className="w-full h-[40px] bg-blue-500 text-white rounded-md">
// // // // // // // // // //                     Login
// // // // // // // // // //                 </button>
// // // // // // // // // //             </div>
// // // // // // // // // //         </div>
// // // // // // // // // //     );
// // // // // // // // // // }
// // // // // // // // // import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
// // // // // // // // // import React, { useState } from "react";



// // // // // // // // // export default function Login() {
// // // // // // // // //     const [showPassword, setShowPassword] = useState(false);

// // // // // // // // //     const togglePassword = () => setShowPassword(!showPassword);

// // // // // // // // //     return (
// // // // // // // // //         <div className="flex items-center justify-center min-h-screen bg-gray-100">
// // // // // // // // //             <div className="bg-white shadow-lg rounded-lg p-8 w-[400px]">
// // // // // // // // //                 <div className="w-[222px] h-[]" > < img src="pic/Asset 1@33 2@2x.png" alt="" /></div>

// // // // // // // // //                 {/* Email Field */}
// // // // // // // // //                 <div className="mb-4 flex items-center border border-gray-300 rounded-md px-3 py-2">
// // // // // // // // //                     <FaUser size={20} className="text-gray-400 mr-2" />
// // // // // // // // //                     <input
// // // // // // // // //                         type="email"
// // // // // // // // //                         placeholder="Enter your email"
// // // // // // // // //                         className="w-full h-[29px] bg-white focus:outline-none"
// // // // // // // // //                     />
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* Password Field */}
// // // // // // // // //                 <div className="mb-4 flex items-center border border-gray-300 rounded-md px-3 py-2">
// // // // // // // // //                     <FaLock size={20} className="text-gray-400 mr-2" />
// // // // // // // // //                     <input
// // // // // // // // //                         type={showPassword ? "text" : "password"}
// // // // // // // // //                         placeholder="Enter your password"
// // // // // // // // //                         className="w-full h-[29px] bg-white focus:outline-none"
// // // // // // // // //                     />
// // // // // // // // //                     <span onClick={togglePassword} className="cursor-pointer ml-2">
// // // // // // // // //                         {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
// // // // // // // // //                     </span>
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* Login Button */}
// // // // // // // // //                 <button className="w-full h-[40px] bg-blue-500 text-white rounded-md">
// // // // // // // // //                     Login
// // // // // // // // //                 </button>
// // // // // // // // //             </div>
// // // // // // // // //         </div>
// // // // // // // // //     );
// // // // // // // // // }r

// // // // // // // // import React from 'react'

// // // // // // // // export default function Login() {
// // // // // // // //     return (
// // // // // // // //         <div>
// // // // // // // //             <div>
// // // // // // // //                 <div>
// // // // // // // //                     <h2></h2>





// // // // // // // //                 </div>




// // // // // // // //             </div>



// // // // // // // //         </div>
// // // // // // // //     )
// // // // // // // // }


// // // // // // // {/* < img src="pic/Asset 1@33 2@2x.png" */ }
// // // // // // // import React from 'react'

// // // // // // // export default function Login() {
// // // // // // //     return (
// // // // // // //         <div className="h-screen bg-cover bg-center bg-[url('/public/log/log.png')] w-[1013px] h-[1013px] mt-[32px] border-[10px] border[#EBCA61]">















// // // // // // //         </div>
// // // // // // //     )
// // // // // // // }
// // // // // // import React from "react";
// // // // // // import { FiUser, FiLock, FiEye } from "react-icons/fi";
// // // // // // import bg from "../assets/bg-pattern.png";   // اگر public میں ہے تو "/bg-pattern.png" use کریں
// // // // // // import avatar from "../assets/avatar.png";  // آپ کی avatar image

// // // // // // export default function Login() {
// // // // // //     return (
// // // // // //         <div
// // // // // //             className="min-h-screen bg-cover bg-center flex items-center justify-center p-8"
// // // // // //             style={{ backgroundImage: `url(${bg})` }}
// // // // // //         >
// // // // // //             {/* Outer frame container */}
// // // // // //             <div className="relative w-full max-w-3xl">
// // // // // //                 {/* GOLDEN OUTER BORDER */}
// // // // // //                 <div className="absolute inset-0 pointer-events-none" />
// // // // // //                 <div className="mx-auto frame-border bg-transparent rounded-md p-6"
// // // // // //                     style={{ padding: "36px", background: "transparent" }}>
// // // // // //                     {/* Center white card with inner shadow */}
// // // // // //                     <div className="bg-white shadow-lg rounded-sm mx-auto"
// // // // // //                         style={{ width: "680px", margin: "0 auto", position: "relative" }}>
// // // // // //                         {/* inner white panel */}
// // // // // //                         <div className="relative p-12">
// // // // // //                             {/* avatar placed overlapping top-center */}
// // // // // //                             <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
// // // // // //                                 <img src={avatar} alt="avatar" className="w-36 h-28 object-contain rounded-full" />
// // // // // //                             </div>

// // // // // //                             {/* empty space for avatar overlap */}
// // // // // //                             <div className="h-12"></div>

// // // // // //                             {/* inputs */}
// // // // // //                             <div className="space-y-6 mt-6 flex flex-col items-center">
// // // // // //                                 {/* Email input */}
// // // // // //                                 <div className="w-3/4 flex items-center input-border rounded-lg p-4 shadow-sm">
// // // // // //                                     <div className="pr-4">
// // // // // //                                         <FiUser size={20} />
// // // // // //                                     </div>
// // // // // //                                     <input
// // // // // //                                         className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
// // // // // //                                         type="email"
// // // // // //                                         placeholder="hariscodexdev@gmail.com"
// // // // // //                                     />
// // // // // //                                 </div>

// // // // // //                                 {/* Password input */}
// // // // // //                                 <div className="w-3/4 flex items-center input-border rounded-lg p-4 shadow-sm">
// // // // // //                                     <div className="pr-4">
// // // // // //                                         <FiLock size={20} />
// // // // // //                                     </div>
// // // // // //                                     <input
// // // // // //                                         className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
// // // // // //                                         type="password"
// // // // // //                                         placeholder="Enter your password"
// // // // // //                                     />
// // // // // //                                     <div className="pl-4">
// // // // // //                                         <FiEye size={20} />
// // // // // //                                     </div>
// // // // // //                                 </div>

// // // // // //                                 {/* remember / forgot row */}
// // // // // //                                 <div className="w-3/4 flex justify-between text-sm text-gray-700">
// // // // // //                                     <label className="flex items-center gap-2">
// // // // // //                                         <input type="checkbox" className="form-checkbox" />
// // // // // //                                         <span>Remember Me</span>
// // // // // //                                     </label>
// // // // // //                                     <a href="#" className="text-sm">Forgot Password</a>
// // // // // //                                 </div>

// // // // // //                                 {/* Login button */}
// // // // // //                                 <button className="w-3/4 btn-gold rounded-3xl py-4 text-2xl font-medium text-white mt-6">
// // // // // //                                     Login
// // // // // //                                 </button>

// // // // // //                                 {/* bottom link */}
// // // // // //                                 <p className="text-sm text-gray-500 mt-4">
// // // // // //                                     <span className="text-yellow-600">Not registered yet?</span>{" "}
// // // // // //                                     <a href="#" className="text-gray-700">Create an account</a>
// // // // // //                                 </p>
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // // }
// // // // // // import React, { useState } from "react";
// // // // // // import { FiUser, FiLock, FiEye } from "react-icons/fi";

// // // // // // export default function Login() {
// // // // // //     const [show, setShow] = useState(false);

// // // // // //     return (
// // // // // //         <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // //             {/* Outer frame */}
// // // // // //             <div className="frame-border bg-white rounded-xl p-10 w-full max-w-md shadow-lg">
// // // // // //                 <h2 className="text-3xl font-semibold text-center mb-10 text-gray-700">
// // // // // //                     Login
// // // // // //                 </h2>

// // // // // //                 {/* Email */}
// // // // // //                 <div className="flex items-center border border-yellow-300 rounded-lg p-3 mb-5">
// // // // // //                     <FiUser className="text-gray-500 mr-3" />
// // // // // //                     <input
// // // // // //                         type="email"
// // // // // //                         placeholder="Enter your email"
// // // // // //                         className="flex-1 outline-none bg-transparent"
// // // // // //                     />
// // // // // //                 </div>

// // // // // //                 {/* Password */}
// // // // // //                 <div className="flex items-center border border-yellow-300 rounded-lg p-3 mb-3">
// // // // // //                     <FiLock className="text-gray-500 mr-3" />
// // // // // //                     <input
// // // // // //                         type={show ? "text" : "password"}
// // // // // //                         placeholder="Enter your password"
// // // // // //                         className="flex-1 outline-none bg-transparent"
// // // // // //                     />
// // // // // //                     <FiEye
// // // // // //                         onClick={() => setShow(!show)}
// // // // // //                         className="text-gray-500 cursor-pointer"
// // // // // //                     />
// // // // // //                 </div>

// // // // // //                 {/* Remember + Forgot */}
// // // // // //                 <div className="flex justify-between text-sm text-gray-600 mb-6">
// // // // // //                     <label className="flex items-center gap-2">
// // // // // //                         <input type="checkbox" />
// // // // // //                         Remember Me
// // // // // //                     </label>
// // // // // //                     <a href="#" className="hover:text-yellow-600">
// // // // // //                         Forgot Password?
// // // // // //                     </a>
// // // // // //                 </div>

// // // // // //                 {/* Login button */}
// // // // // //                 <button className="w-full py-3 btn-gold text-white font-medium rounded-lg shadow-md">
// // // // // //                     Login
// // // // // //                 </button>

// // // // // //                 {/* Register link */}
// // // // // //                 <p className="text-center text-sm mt-5 text-gray-700">
// // // // // //                     Not registered yet?{" "}
// // // // // //                     <a href="#" className="text-yellow-600 font-medium">
// // // // // //                         Create an account
// // // // // //                     </a>
// // // // // //                 </p>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // // }
// // // // // // the best methond we assing the pic aru hum iske bad second method ahteyar kerdetahi tk hai ok
// // // // // // // import React from 'react'

// // // // // // export default function Login() {
// // // // // //     return (
// // // // // //         <div> <img src="log/log.png" alt=""  />

// // // // // //             <div></div>

// // // // // //         </div>
// // // // // //     )
// // // // // // }
// // // // // // import React from 'react'

// // // // // // export default function Login() {
// // // // // //     return (
// // // // // //         <div className='w-full h-screen bg-cover border-[10px] border-[#EBCA61] top-[32px] opacity-100 flex items-center justify-center'
// // // // // //             style={{ backgroundImage: "url('log/log.png')" }}>

// // // // // //         </div>
// // // // // //     )
// // // // // // }
// // // // // import React from 'react'

// // // // // export default function Login() {
// // // // //     return (
// // // // //         <div className='relative w-full h-screen bg-cover flex items-center justify-center'>
// // // // //             <div
// // // // //                 className='absolute top-[32px] left-[25px] w-full h-screen  border-[10px] border-[#EBCA61] opacity-100'
// // // // //                 style={{ backgroundImage: "url('log/log.png')" }}
// // // // //             >
// // // // //                 {/* Yahan tumhara form ya content aayega */}
// // // // //             </div>
// // // // //         </div>
// // // // //     )
// // // // // }

// // // // import React from 'react'

// // // // export default function Login() {
// // // //     return (
// // // //         <div className='relative w-full h-screen flex items-center justify-center'>
// // // //             <div
// // // //                 className='absolute top-[32px] left-[25px] border-[10px] border-[#EBCA61] opacity-100 bg-center bg-contain bg-no-repeat w-[90%] h-[90%]'
// // // //                 style={{ backgroundImage: "url('log/log.png')" }}>

// // // //                 <div className='w-full h-screen flex items-center justify-center '>
// // // //                     <div className='absolute w-[850px] h-[890px] bg-white rounded-xl shadow-lg opacity-100 top-[115px] left-[535px] flex flex-col items-center justify-center'>
// // // //                         <form className='flex flex-col items-center space-y-6'>
// // // //                             <div className="flex flex-col w-[400px]">
// // // //                                  <label className="text-gray-700 text-lg mb-2">Email</label>
// // // //                                   <input 
// // // //                                        type="email"
// // // //                                     placeholder="Enter your email"
// // // //                                     className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EBCA61]"
// // // //                                />




// // // //                             </div>



// // // //                         </form>


// // // //                     </div>



// // // //                 </div>



// // // //             </div>
// // // //         </div>
// // // //     )
// // // // }
// // // // import React from 'react'

// // // // export default function Login() {
// // // //     return (
// // // //         <div className='relative w-full h-screen flex items-center justify-center bg-gray-50'>
// // // //             <div
// // // //                 className='absolute top-[32px] left-[25px] border-[10px] border-[#EBCA61] bg-center bg-contain bg-no-repeat w-[90%] h-[90%] rounded-2xl shadow-lg'
// // // //                 style={{ backgroundImage: "url('log/log.png')" }}
// // // //             >
// // // //                 <div className='absolute w-[850px] h-[890px] bg-white rounded-2xl shadow-2xl top-[115px] left-[535px] flex flex-col items-center justify-center'>
// // // //                     <h2 className='text-4xl font-bold text-[#EBCA61] mb-10 tracking-wide'>Login</h2>

// // // //                     <form className='flex flex-col items-center w-full space-y-8'>
// // // //                         <div className="flex flex-col w-[70%]">
// // // //                             <label className="text-gray-700 text-lg mb-2 font-semibold">Email</label>
// // // //                             <input
// // // //                                 type="email"
// // // //                                 placeholder="Enter your email"
// // // //                                 className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EBCA61] text-gray-800 shadow-sm"
// // // //                             />
// // // //                         </div>

// // // //                         <div className="flex flex-col w-[70%]">
// // // //                             <label className="text-gray-700 text-lg mb-2 font-semibold">Password</label>
// // // //                             <input
// // // //                                 type="password"
// // // //                                 placeholder="Enter your password"
// // // //                                 className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EBCA61] text-gray-800 shadow-sm"
// // // //                             />
// // // //                         </div>

// // // //                         <button
// // // //                             type="submit"
// // // //                             className="mt-6 bg-[#EBCA61] text-white text-xl font-semibold px-12 py-3 rounded-lg hover:bg-[#d6b850] transition duration-300 shadow-md"
// // // //                         >
// // // //                             Login
// // // //                         </button>
// // // //                     </form>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     )
// // // // }
// // // import React from 'react'

// // // export default function Login() {
// // //     return (
// // //         <div className="relative w-full h-screen flex items-center justify-center bg-[#fefbf3]">
// // //             {/* Outer Border Background */}
// // //             <div
// // //                 className="absolute top-[32px] left-[25px] border-[10px] border-[#EBCA61] rounded-2xl shadow-2xl w-[90%] h-[90%] bg-cover bg-center"
// // //                 style={{ backgroundImage: "url('log/log.png')" }}
// // //             >
// // //                 {/* Login Box */}
// // //                 <div className="absolute w-[850px] h-[890px] bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl top-[115px] left-[535px] flex flex-col items-center justify-center">

// // //                     {/* Title */}
// // //                     <h2 className="text-5xl font-bold text-[#EBCA61] mb-10 drop-shadow-md tracking-wide">
// // //                         Welcome Back 👋
// // //                     </h2>

// // //                     {/* Form */}
// // //                     <form className="flex flex-col items-center w-[70%] space-y-10">

// // //                         {/* Email */}
// // //                         <div className="flex flex-col w-full">
// // //                             <label className="text-gray-700 text-lg mb-2 font-semibold">Email</label>
// // //                             <input
// // //                                 type="email"
// // //                                 placeholder="Enter your email"
// // //                                 className="border border-gray-300 rounded-xl px-5 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-[#EBCA61]/70 transition-all shadow-sm"
// // //                             />
// // //                         </div>

// // //                         {/* Password */}
// // //                         <div className="flex flex-col w-full">
// // //                             <label className="text-gray-700 text-lg mb-2 font-semibold">Password</label>
// // //                             <input
// // //                                 type="password"
// // //                                 placeholder="Enter your password"
// // //                                 className="border border-gray-300 rounded-xl px-5 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-[#EBCA61]/70 transition-all shadow-sm"
// // //                             />
// // //                         </div>

// // //                         {/* Button */}
// // //                         <button
// // //                             type="submit"
// // //                             className="w-full bg-[#EBCA61] text-white font-semibold text-xl py-3 rounded-xl hover:bg-[#d8b94c] transition-all duration-300 shadow-md"
// // //                         >
// // //                             Login
// // //                         </button>

// // //                         {/* Links */}
// // //                         <div className="flex justify-between w-full text-sm text-gray-600 mt-2">
// // //                             <a href="#" className="hover:text-[#EBCA61]">Forgot Password?</a>
// // //                             <a href="#" className="hover:text-[#EBCA61]">Create Account</a>
// // //                         </div>

// // //                     </form>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     )
// // // }


// // <form className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm mx-auto">
// //     {/* Email Field */}
// //     <div className="mb-4">
// //         <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
// //             Email
// //         </label>
// //         <input
// //             type="email"
// //             id="email"
// //             placeholder="Enter your email"
// //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
// //         />
// //     </div>

// //     {/* Password Field */}
// //     <div className="mb-4">
// //         <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
// //             Password
// //         </label>
// //         <input
// //             type="password"
// //             id="password"
// //             placeholder="Enter your password"
// //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
// //         />
// //     </div>

// //     {/* Submit Button */}
// //     <div className="text-center">
// //         <button
// //             type="submit"
// //             className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md transition duration-200"
// //         >
// //             Login
// //         </button>
// //     </div>
// // </form>

// // import React from 'react'

// // export default function Login() {
// //     return (
// //         <div className='w-full h-screen flex items-center justify-center bg-cover bg-center '
// //             style={{ backgroundImage: "url('log/log.png')" }}>
// //             <div className='border-8 border-[#EBCA61] w-[90%] h-[90%] flex justify-center items-center ' >
// //                 <div className='border-12 border-[#EBCA61] w-[60%] h-[60%] flex items-center justify-center bg-cover bg-center bg-white'>

// //                     <from className="relative flex items-center justify-center">
// //                         <div className=' flex justify-center items-center '>
// //                             <img src="log/log2.png" alt="" className='absolute h-50 ' />
// //                             <button>clickme</button>








// //                         </div>





// //                     </from>
// //                 </div>


// //             </div>

// //         </div>
// //     )
// // }


// import React from 'react'

// export default function Login() {
//     return (
//         <div
//             className="w-full h-screen flex items-center justify-center bg-cover bg-center"
//             style={{ backgroundImage: "url('log/log.png')" }}
//         >
//             <div className="border-8 border-[#EBCA61] w-[90%] h-[90%] flex justify-center items-center">
//                 <div className="border-8 border-[#EBCA61] w-[60%] h-[60%] flex items-center justify-center bg-white bg-cover bg-center">
//                     <form className="relative flex flex-col items-center justify-center space-y-4">
//                         <img src="log/log2.png" alt="" className="absolute h-30 top-[-50px]" />

//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                             className="w-64 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBCA61]"
//                         />
//                         <input
//                             type="password"
//                             placeholder="Enter your password"
//                             className="w-64 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBCA61]"
//                         />
//                         <button
//                             type="submit"
//                             className="w-64 p-2 bg-[#EBCA61] text-white font-semibold rounded-md hover:bg-yellow-500"
//                         >
//                             Login
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }



import React from "react";
import { Mail, Lock } from "lucide-react"; // icon library

export default function Login() {
    return (
        <div
            className="w-full h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('log/log.png')" }}
        >
            {/* Outer Golden Border */}
            <div className="border-8 border-[#EBCA61] w-[90%] h-[90%] flex justify-center items-center">

                {/* Inner White Box */}
                <div className="border-20 border-[#EBCA61] w-[40%] h-[80%] bg-white  shadow-xl flex flex-col items-center relative">

                    {/* Top Illustration */}
                    <img
                        src="log/log2.png"
                        alt="login illustration"
                        className="w-32 absolute -top-14"
                    />

                    {/* Login Form */}
                    <form className="mt-24 w-3/4 flex flex-col space-y-4">

                        {/* Email Input */}
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBCA61]"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBCA61]"
                            />
                            <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
                                👁️
                            </span>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex justify-between text-sm text-gray-600">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-[#EBCA61]" />
                                <span>Remember Me</span>
                            </label>
                            <a href="#" className="hover:text-[#EBCA61]">
                                Forgot Password
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-[#EBCA61] text-white font-semibold rounded-md hover:bg-yellow-500 transition-all duration-300"
                        >
                            Login
                        </button>

                        {/* Register Link */}
                        <p className="text-center text-sm mt-2">
                            Not registered yet?{" "}
                            <a href="#" className="text-[#EBCA61] font-medium hover:underline">
                                Create an account
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

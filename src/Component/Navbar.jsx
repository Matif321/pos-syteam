import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="bg-amber-400 p-4 text-white flex space-x-4">
            <Link to="/login" className="hover:text-yellow-300">Login</Link>
            <Link to="/" className="hover:text-yellow-300">Welcome</Link>

            <Link to="/product" className="hover:text-yellow-300">Product</Link>
            <Link to="/pyment" className="hover:text-yellow-300">Pyment</Link>


        </nav>
    )
}

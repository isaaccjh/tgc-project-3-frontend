import "../index.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
    return (<>
        <nav class="bg-white dark:bg-gray-800 shadow ">
            <div className="flex p-5 border-2 border-purple-400">
                <span className="text-2xl">Zerek</span>
                <div className="flex">
                    <div className="border-2 border-red-600">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="border-2 border-red-600">
                        <Link to="/">Products</Link>
                    </div>
                    <div className="border-2 border-red-600">
                        <Link to="/">About Us</Link>
                    </div>
                    <div className="border-2 border-red-600">
                        <Link to="/">Contact Us</Link>
                    </div>
                </div>
            </div>

        </nav>
    </>)
}
import "../index.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../zerek.png"

export default function Navbar() {
    return (<>
        <nav class="bg-yellow-800 dark:bg-gray-800 shadow ">
            <div className="flex p-5 border-2 border-purple-400 align-middle">
                    <a>Zerek</a>
                <div className="flex border-2 border-blue-900 ml-2">
                    <div className="p-2">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="p-2">
                        <Link to="/">Products</Link>
                    </div>
                    <div className="p-2">
                        <Link to="/">About Us</Link>
                    </div>
                    <div className="p-2">
                        <Link to="/">Contact Us</Link>
                    </div>
                </div>
            </div>

        </nav>
    </>)
}
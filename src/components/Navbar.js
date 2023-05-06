import "../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs"
import { VscAccount } from "react-icons/vsc"
import Logo from "../zerek.png";

export default function Navbar() {

    return (<>
        <nav className="bg-red-400 dark:bg-gray-800 shadow">
            <div className="flex justify-between p-4 border-2 border-purple-400 items-center align-middle">
                    <Link to="/">Zerek</Link>
                <div className="flex border-2 border-blue-900">
                    <div className="p-2 bg-yellow-200 ">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="p-2 bg-yellow-200">
                        <Link to="/products">Products</Link>
                    </div>
                    <div className="p-2 bg-yellow-200">
                        <Link to="/about-us">About Us</Link>
                    </div>
                    <div className="p-2 bg-yellow-200">
                        <Link to="/contact-us">Contact Us</Link>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <div className="p-2 mr-3">
                            <button className="scale-[1.5]"><BsCart /></button>
                        </div>
                        <div className="p-2 flex mr-2">
                           <button className="scale-[1.6]"><VscAccount /></button>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    </>)
}
import React, { useState } from "react";
import { FaBars, FaTimes, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { cartItems } = useCart();
    const { wishlist } = useWishlist();

    // Total quantity in cart
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Total wishlist items
    const wishlistCount = wishlist.length;

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

                {/* Brand Logo */}
                <h1 className="text-2xl md:text-3xl font-light tracking-[0.4em] md:tracking-[0.6em] text-gray-800 hover:text-black transition duration-300 cursor-pointer">
                    <a href="/" className="block" onClick={() => setIsOpen(false)}>
                        ALIF
                    </a>
                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-10">
                    {["Home", "About", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                            className="relative text-[16px] font-medium text-gray-600 hover:text-black transition duration-300 group"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Action Controls (Cart, Wishlist, Mobile Trigger) */}
                <div className="flex items-center space-x-3 md:space-x-4">

                    {/* Wishlist Icon */}
                    <div className="relative p-2 rounded-full hover:bg-gray-100 transition duration-300">
                        <Link to="/wishlist">
                            <FaRegHeart
                                size={20}
                                className="text-gray-700 hover:text-black"
                            />
                        </Link>
                        {wishlistCount > 0 && (
                            <span className="absolute top-0 right-0 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                {wishlistCount}
                            </span>
                        )}
                    </div>

                    {/* Cart Icon */}
                    <div className="relative p-2 rounded-full hover:bg-gray-100 transition duration-300">
                        <Link to="/cart">
                            <IoCartOutline
                                size={22}
                                className="text-gray-700 hover:text-black"
                            />
                        </Link>
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                {cartCount}
                            </span>
                        )}
                    </div>

                    {/* Mobile Menu Hamburger (Visible only on small screens) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-700 hover:text-black transition duration-300 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Dark Overlay Behind Drawer */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Redesigned Mobile Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header inside Mobile Menu */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <span className="font-light tracking-[0.4em] text-lg text-gray-800">MENU</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 text-gray-500 hover:text-black transition"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                {/* Navigation Links inside Drawer */}
                <div className="py-4 flex flex-col">
                    {[
                        { label: "Home", path: "/" },
                        { label: "About", path: "/about" },
                        { label: "Contact", path: "/contact" }
                    ].map((link) => (
                        <a
                            key={link.label}
                            href={link.path}
                            onClick={() => setIsOpen(false)}
                            className="px-6 py-4 text-gray-700 hover:text-black hover:bg-gray-50 font-medium text-base transition-all duration-200 border-b border-gray-50 last:border-0"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
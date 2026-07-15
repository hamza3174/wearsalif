import React from 'react';
import { useCart } from '../../../context/CartContext';
import { IoTrashOutline, IoBagCheckOutline, IoArrowBackOutline } from 'react-icons/io5';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
    } = useCart();

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // Flat standard shipping rate of Rs 250
    const SHIPPING_CHARGE = 250;

    // Modern Empty State View
    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-white">
                <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mb-4">
                    <IoBagCheckOutline size={28} />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Your cart is empty</h2>
                <p className="text-gray-500 text-sm mb-6 max-w-xs">
                    Looks like you haven't added anything to your cart yet.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-gray-900 transition-all cursor-pointer shadow-xs"
                >
                    <IoArrowBackOutline size={14} />
                    Continue Shopping
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 bg-white">
            {/* Header */}
            <div className="mb-10 border-b border-gray-100 pb-5">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                    Shopping Cart
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    You have {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items in your cart
                </p>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                {/* Left Side: Items List Container */}
                <div className="lg:col-span-2 space-y-px bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xs">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors duration-200"
                        >
                            {/* Product Info & Thumbnail */}
                            <div className="flex items-center gap-4 flex-1">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-24 object-cover rounded-xl bg-gray-50 border border-gray-100 flex-shrink-0"
                                />
                                <div className="space-y-1">
                                    <h3 className="font-medium text-gray-900 text-sm md:text-base line-clamp-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Size: <span className="text-gray-700 font-semibold">{item.size || 'M'}</span>
                                    </p>
                                    <p className="text-sm font-semibold text-gray-900 sm:hidden">
                                        Rs {item.price.toLocaleString()}
                                    </p>
                                </div>
                            </div>

                            {/* Actions Right Area (Controls & Prices) */}
                            <div className="flex items-center justify-between sm:justify-end gap-6 md:gap-10 pt-3 sm:pt-0 border-t sm:border-0 border-gray-100">
                                {/* Hidden on mobile for cleaner card styling layout */}
                                <div className="hidden sm:block text-right min-w-[80px]">
                                    <p className="text-xs text-gray-400 font-medium mb-0.5">Price</p>
                                    <p className="text-sm font-medium text-gray-600">Rs {item.price.toLocaleString()}</p>
                                </div>

                                {/* Custom Rounded Quantity Module */}
                                <div className="flex items-center border border-gray-200 rounded-xl bg-white p-1 shadow-2xs">
                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="p-2 text-gray-500 hover:text-black hover:bg-gray-50 rounded-lg transition cursor-pointer"
                                        title="Decrease quantity"
                                    >
                                        <FiMinus size={14} />
                                    </button>
                                    <span className="w-8 text-center text-sm font-semibold text-gray-900 select-none">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => increaseQuantity(item.id)}
                                        className="p-2 text-gray-500 hover:text-black hover:bg-gray-50 rounded-lg transition cursor-pointer"
                                        title="Increase quantity"
                                    >
                                        <FiPlus size={14} />
                                    </button>
                                </div>

                                {/* Total Price Area per line item */}
                                <div className="text-right min-w-[100px]">
                                    <p className="text-xs text-gray-400 font-medium mb-0.5 hidden sm:block">Subtotal</p>
                                    <p className="text-sm font-bold text-gray-900">
                                        Rs {(item.price * item.quantity).toLocaleString()}
                                    </p>
                                </div>

                                {/* Modern Trash Icon Button */}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition duration-200 cursor-pointer"
                                    title="Remove item"
                                >
                                    <IoTrashOutline size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Sticky Checkout Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 lg:p-8 sticky top-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

                    <div className="space-y-4 text-sm mb-6">
                        <div className="flex justify-between text-gray-500 font-medium">
                            <span>Subtotal</span>
                            <span className="text-gray-900 font-semibold">Rs {subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-gray-500 font-medium">
                            <span>Shipping</span>
                            <span className="text-gray-900 font-semibold">Rs {SHIPPING_CHARGE.toLocaleString()}</span>
                        </div>
                        <div className="w-full h-[1px] bg-gray-200 my-2"></div>
                        <div className="flex justify-between text-base font-bold text-gray-900 pt-1">
                            <span>Estimated Total</span>
                            <span className="text-lg font-extrabold text-gray-900">
                                Rs {(subtotal + SHIPPING_CHARGE).toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate("/billingForm")}
                        className="w-full bg-black text-white py-4 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs hover:bg-gray-900 transition duration-300 cursor-pointer shadow-md flex items-center justify-center gap-2 group">
                        Proceed To Checkout
                        <IoBagCheckOutline size={16} className="transition-transform group-hover:translate-x-0.5" />
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="w-full text-center text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-black transition duration-300 mt-4 block py-2 cursor-pointer"
                    >
                        Continue Shopping
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Cart;
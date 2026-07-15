import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoArrowBackOutline, IoBagHandleOutline, IoCloseOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { useCart } from '../../../context/CartContext';

const ProductDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;

    const [selectedSize, setSelectedSize] = useState("M");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(
        product?.images?.[0] || product?.image
    );

    const { addToCart } = useCart();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // or remove this line if you want an instant jump
        });
    }, []);

    const handleAddToCart = () => {
        if (!product) return;
        addToCart({
            ...product,
            size: selectedSize
        });
        navigate('/cart');
    };

    if (!product) {
        return (
            <div className='min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-gray-50/50'>
                <div className='bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-sm w-full flex flex-col items-center'>
                    <div className='w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4 text-2xl font-semibold'>!</div>
                    <h2 className='text-2xl font-bold text-gray-950 mb-2 tracking-tight'>Product Not Found</h2>
                    <p className='text-gray-500 text-sm mb-6 leading-relaxed'>
                        It looks like this page was refreshed or accessed directly. Let's get you back to browsing our premium collections.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className='w-full bg-gray-950 text-white py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 shadow-sm active:scale-[0.98] cursor-pointer'
                    >
                        View All Products
                    </button>
                </div>
            </div>
        );
    }

    const productPrice = product?.price || 0;
    const originalPrice = product?.originalPrice || (productPrice + 1000);
    const savings = originalPrice - productPrice;

    const fallbackText = "Crafted beautifully with high-quality seasonal textures and premium fabrics. Built seamlessly with sophisticated cuts perfect for modern casual or semi-formal settings.";

    return (
        <div className='px-4 md:px-8 lg:px-16 py-8 max-w-7xl mx-auto bg-white antialiased text-gray-900'>
            {/* Minimalist Breadcrumb Back Navigation */}
            <button
                onClick={() => navigate(-1)}
                className='flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors font-medium text-sm cursor-pointer group'
            >
                <IoArrowBackOutline size={18} className='transition-transform duration-300 group-hover:-translate-x-1.5' />
                Back to Collection
            </button>

            {/* Main Product Layout Split View */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start'>

                {/* Left Column: Image Stack */}
                <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
                    {/* Thumbnail Dynamic Strip */}
                    {product.images && product.images.length > 0 && (
                        <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
                            {product.images.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedImage(img)}
                                    className={`w-20 h-24 md:w-24 md:h-32 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 shrink-0 ${selectedImage === img ? "border-gray-950 scale-[0.98] shadow-sm" : "border-gray-100 hover:border-gray-300"
                                        }`}
                                >
                                    <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Main Stage Showcase Image Display */}
                    <div className="flex-1 aspect-[4/5] md:h-[680px] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-xs">
                        <img
                            src={selectedImage}
                            alt={product.name}
                            className="w-full h-full object-cover transition-all duration-700 ease-out"
                        />
                    </div>
                </div>

                {/* Right Column: Buying Hub & Vertical Info Stack */}
                <div className='lg:col-span-5 flex flex-col md:sticky md:top-8'>
                    <div>
                        <span className='inline-flex items-center justify-center bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 border border-red-100/50'>
                            New Arrival
                        </span>

                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight leading-[1.15] mb-4'>
                            {product.name}
                        </h1>

                        {/* Smart Dynamic Pricing Panel */}
                        <div className='flex items-baseline gap-3 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100/60'>
                            <span className='text-3xl font-black text-gray-950 tracking-tight'>
                                Rs {productPrice.toLocaleString()}
                            </span>
                            <span className='line-through text-gray-400 text-sm font-medium'>
                                Rs {originalPrice.toLocaleString()}
                            </span>
                            <span className='ml-auto bg-green-50 text-green-700 border border-green-100 px-2.5 py-1 rounded-lg text-xs font-bold'>
                                Save Rs {savings.toLocaleString()}
                            </span>
                        </div>

                        {/* Sizing Controller Area */}
                        <div className='mb-8'>
                            <div className='flex justify-between items-center mb-3'>
                                <span className='text-xs uppercase text-gray-400 tracking-wider font-bold'>Select Size</span>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className='text-xs font-semibold text-gray-950 underline bg-transparent border-none cursor-pointer hover:text-gray-700 transition-colors'
                                >
                                    Size Guide
                                </button>
                            </div>
                            <div className='flex gap-3'>
                                {['S', 'M', 'L'].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-12 h-12 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer border active:scale-95 ${selectedSize === size
                                            ? 'border-gray-950 bg-gray-950 text-white shadow-md shadow-gray-950/10'
                                            : 'border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50 bg-white'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Main Action Buttons */}
                        <div className='flex flex-col sm:flex-row gap-3 mb-10'>
                            <button
                                onClick={handleAddToCart}
                                className='flex-[2.5] bg-gray-950 text-white py-4 px-6 rounded-xl font-semibold tracking-wide hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-gray-950/10 active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer'
                            >
                                <IoBagHandleOutline size={20} className="stroke-[2.5]" />
                                Add To Cart
                            </button>

                            <button
                                onClick={() => navigate('/wishlist')}
                                className='flex-1 border border-gray-200 text-gray-800 px-6 py-4 rounded-xl text-sm font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer'
                            >
                                <CiHeart size={22} className='stroke-[1.5]' />
                                Wishlist
                            </button>
                        </div>

                        <hr className='border-gray-100 my-6' />

                        {/* Clean Vertical Description Stack */}
                        <div className='space-y-6 mt-6'>
                            <div className="border-b border-gray-100 pb-5">
                                <h3 className='text-xs uppercase font-bold tracking-widest text-gray-950 mb-2.5'>
                                    Description
                                </h3>
                                <p className='text-gray-600 leading-relaxed text-sm whitespace-pre-line'>
                                    {product.description || fallbackText}
                                </p>
                            </div>

                            {product.color && (
                                <div className="border-b border-gray-100 pb-5">
                                    <h3 className='text-xs uppercase font-bold tracking-widest text-gray-950 mb-2.5'>
                                        Color
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed text-sm whitespace-pre-line'>
                                        {product.color}
                                    </p>
                                </div>
                            )}

                            {product.packageIncludes && (
                                <div className="border-b border-gray-100 pb-5">
                                    <h3 className='text-xs uppercase font-bold tracking-widest text-gray-950 mb-2.5'>
                                        Package Includes
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed text-sm whitespace-pre-line'>
                                        {product.packageIncludes}
                                    </p>
                                </div>
                            )}

                            {product.productfeature && (
                                <div className="pb-5">
                                    <h3 className='text-xs uppercase font-bold tracking-widest text-gray-950 mb-2.5'>
                                        Features
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed text-sm whitespace-pre-line'>
                                        {product.productfeature}
                                    </p>
                                </div>
                            )}
                            {product.fabric && (
                                <div className="pb-5">
                                    <h3 className="text-xs font-bold tracking-widest text-gray-950 mb-2.5">
                                        Fabric
                                    </h3>

                                    <div className="space-y-1">
                                        {product.fabric.map((item, index) => (
                                            <p
                                                key={index}
                                                className="text-gray-600 leading-relaxed text-sm"
                                            >
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {product.disclaimer && (
                                <div className="pb-5">
                                    <h3 className='text-xs font-bold tracking-widest text-gray-950 mb-2.5'>
                                        Disclaimer
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed text-sm whitespace-pre-line'>
                                        {product.disclaimer}
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

            </div>

            {/* --- SIZE GUIDE MODAL OVERLAY --- */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Panel */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h3 className="font-bold text-gray-900 tracking-tight">Size Chart Guide</h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-black p-1 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <IoCloseOutline size={24} />
                            </button>
                        </div>

                        {/* Image Canvas Container / Built-in Table Fallback */}
                        <div className="p-6 bg-white max-h-[75vh] overflow-y-auto">
                            {product.sizeGuide ? (
                                <div className="flex items-center justify-center bg-gray-50 p-2 rounded-xl">
                                    <img
                                        src={product.sizeGuide}
                                        alt={`${product.name} Size Chart`}
                                        className="w-full h-auto object-contain rounded-lg"
                                    />
                                </div>
                            ) : (
                                <div className="w-full">
                                    <p className="text-xs text-gray-400 mb-4 italic text-center">
                                        Measurements listed in inches. Fits may vary slightly based on style cuts.
                                    </p>
                                    <div className="overflow-x-auto border border-gray-100 rounded-xl">
                                        <table className="w-full text-left border-collapse text-sm">
                                            <thead>
                                                <tr className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
                                                    <th className="py-3 px-4 font-bold text-gray-900">Size</th>
                                                    <th className="py-3 px-4 font-bold text-gray-900">Chest</th>
                                                    <th className="py-3 px-4 font-bold text-gray-900">Length</th>
                                                    <th className="py-3 px-4 font-bold text-gray-900">Sleeve</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50 text-gray-600 font-medium">
                                                <tr className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-3.5 px-4 text-gray-950 font-bold">S</td>
                                                    <td className="py-3.5 px-4">36 - 38</td>
                                                    <td className="py-3.5 px-4">27.5</td>
                                                    <td className="py-3.5 px-4">8.5</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50/50 transition-colors bg-gray-50/30">
                                                    <td className="py-3.5 px-4 text-gray-950 font-bold">M</td>
                                                    <td className="py-3.5 px-4">38 - 40</td>
                                                    <td className="py-3.5 px-4">28.5</td>
                                                    <td className="py-3.5 px-4">9.0</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-3.5 px-4 text-gray-950 font-bold">L</td>
                                                    <td className="py-3.5 px-4">40 - 42</td>
                                                    <td className="py-3.5 px-4">29.5</td>
                                                    <td className="py-3.5 px-4">9.5</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-5 bg-amber-50/60 border border-amber-100/50 p-4 rounded-xl text-xs text-amber-800 leading-relaxed">
                                        <strong>How to measure:</strong> For the most precise fit, lay your favorite shirt flat on an even surface and measure across the chest just beneath the armpit folds.
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
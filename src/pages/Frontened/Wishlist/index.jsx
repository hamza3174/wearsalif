import React from 'react'
import { useWishlist } from '../../../context/WishlistContext';
import { useCart } from "../../../context/CartContext";
import { IoTrashOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  return (
    <div className='px-6 md:px-20 py-16 max-w-6xl mx-auto'>

      {/* Title */}
      <div className='mb-12 text-center'>
        <h1 className='text-3xl md:text-4xl font-bold tracking-wide text-gray-800'>
          Your Wishlist
        </h1>
        <div className='w-20 h-[2px] bg-red-400 mx-auto mt-4 rounded-full'></div>
      </div>

      {wishlist.length > 0 ? (
        <div>
          {/* Table Container */}
          <div className='overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100'>
            <table className='w-full min-w-[600px] border-collapse text-left'>

              {/* Table Header */}
              <thead>
                <tr className='bg-gray-50 border-b border-gray-100 text-gray-600 font-semibold uppercase text-xs tracking-wider'>
                  <th className='p-6 w-32'>Product</th>
                  <th className='p-6'>Details</th>
                  <th className='p-6 w-36'>Price</th>
                  <th className='p-6 w-48 text-center'>Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className='divide-y divide-gray-100 text-gray-700'>
                {wishlist.map((item) => (
                  <tr key={item.id} className='hover:bg-gray-50/50 transition duration-200 group'>

                    {/* Image Column */}
                    <td className='p-6'>
                      <div className='w-20 h-24 overflow-hidden rounded-xl border border-gray-100 bg-gray-50'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='w-full h-full object-cover transition duration-300 group-hover:scale-105'
                        />
                      </div>
                    </td>

                    {/* Name Column */}
                    <td className='p-6 font-medium text-gray-800 max-w-xs md:max-w-sm'>
                      <span className='line-clamp-2 leading-6'>{item.name}</span>
                    </td>

                    {/* Price Column */}
                    <td className='p-6 font-semibold text-red-500 text-base'>
                      Rs {item.price.toLocaleString()}
                    </td>

                    {/* Action Column */}
                    <td className='p-6'>
                      <div className='flex items-center justify-center gap-4'>

                        {/* Select Options / Add to Cart Placeholder */}
                        <button
                          onClick={() => handleAddToCart(item)}
                          className='bg-black text-white px-4 py-2.5 rounded-lg text-xs font-medium uppercase tracking-wider hover:bg-red-400 transition cursor-pointer whitespace-nowrap shadow-sm'
                        >
                          Add to Cart
                        </button>

                        {/* Clean Trash Icon Remove Button */}
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className='p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition cursor-pointer'
                          title="Remove item"
                        >
                          <IoTrashOutline size={20} />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* NEW: Back to Collection Button (Shows below the table when items exist) */}
          <div className='mt-8 flex justify-start'>
            <Link
              to="/" /* Change "/collection" to your actual route path (e.g., "/shop" or "/products") */
              className='inline-flex items-center gap-2 bg-gray-100 text-gray-800 hover:bg-gray-200 px-6 py-3 rounded-xl font-medium tracking-wide text-sm transition shadow-sm'
            >
              <span>←</span> Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        /* Gorgeous Clean Empty State */
        <div className='text-center py-20 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200 max-w-md mx-auto px-6'>
          <div className='w-16 h-16 bg-red-50 text-red-400 rounded-full flex items-center justify-center mx-auto mb-5'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div>
          <h2 className='text-xl font-bold text-gray-800 mb-2'>Your wishlist is empty</h2>
          <p className='text-gray-500 text-sm mb-6 max-w-xs mx-auto leading-relaxed'>
            Tap the heart icon on your favorite products to save them right here.
          </p>
          <Link
            to="/" /* Matching the same path here for consistency */
            className='inline-block bg-black text-white px-6 py-3 rounded-xl font-medium tracking-wide text-sm hover:bg-red-400 transition shadow-sm'
          >
            Continue Shopping
          </Link>
        </div>
      )}

    </div>
  )
}

export default Wishlist;
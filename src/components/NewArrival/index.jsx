import React, { useState } from 'react';
// Note: Double check if your folder is named "assets" or "assests". 
// Leaving as requested, but standard naming is usually "assets".
import image1 from "../../../assests/1st suit/suit1-img-1.jpeg";
import image2 from "../../../assests/1st suit/suit1-img-2.jpeg";
import image3 from "../../../assests/1st suit/suit1-img-3.jpeg";
import image4 from "../../../assests/1st suit/suit1-img-4.jpeg";
import image5 from "../../../assests/2nd suit/suit2-img-1.jpeg";
import image6 from "../../../assests/2nd suit/suit2-img-2.jpeg";
import image7 from "../../../assests/2nd suit/suit2-img-3.jpeg";
import image8 from "../../../assests/2nd suit/suit2-img-4.jpeg";
import image9 from "../../../assests/3rd suit/suit3-img-1.jpeg";
import image10 from "../../../assests/3rd suit/suit3-img-2.jpeg";
import image11 from "../../../assests/3rd suit/suit3-img-3.jpeg";
import image12 from "../../../assests/3rd suit/suit3-img-4.jpeg";
import image13 from "../../../assests/4th suit/suit4-img-1.jpeg";
import image14 from "../../../assests/4th suit/suit4-img-2.jpeg";
import image15 from "../../../assests/4th suit/suit4-img-3.jpeg";
import image16 from "../../../assests/5th suit/suit5-img-1.jpeg";
import image17 from "../../../assests/5th suit/suit5-img-2.jpeg";
import image18 from "../../../assests/5th suit/suit5-img-3.jpeg";
import image19 from "../../../assests/5th suit/suit5-img-4.jpeg";
import image20 from "../../../assests/6th suit/suit6-img1.png";
import image21 from "../../../assests/6th suit/suit6-img2.png";
import image22 from "../../../assests/6th suit/suit6-img3.png";
import image23 from "../../../assests/6th suit/suit6-img4.png";
import image24 from "../../../assests/7th suit/suit7-img1.jpeg";
import image25 from "../../../assests/7th suit/suit7-img2.jpeg";
import image26 from "../../../assests/7th suit/suit7-img3.jpeg";
import image27 from "../../../assests/7th suit/suit7-img4.jpeg";
import image28 from "../../../assests/8th suit/suit8-img1.jpeg";
import image29 from "../../../assests/8th suit/suit8-img2.jpeg";
import image30 from "../../../assests/8th suit/suit8-img3.jpeg";
import image31 from "../../../assests/8th suit/suit8-img4.jpeg";
import image32 from "../../../assests/9th suit/suit9-img1.jpeg";
import image33 from "../../../assests/9th suit/suit9-img2.jpeg";
import image34 from "../../../assests/9th suit/suit9-img3.jpeg";
import image35 from "../../../assests/9th suit/suit9-img4.jpeg";
import image36 from "../../../assests/10th suit/suit10-img1.jpeg";
import image37 from "../../../assests/10th suit/suit10-img2.jpeg";
import image38 from "../../../assests/10th suit/suit10-img3.jpeg";
import image39 from "../../../assests/10th suit/suit10-img4.jpeg";
import image40 from "../../../assests/11th suit/suit11-img1.jpeg";
import image41 from "../../../assests/11th suit/suit11-img2.jpeg";
import image42 from "../../../assests/11th suit/suit11-img3.jpeg";
import image43 from "../../../assests/11th suit/suit11-img4.jpeg";
import image44 from "../../../assests/12th suit/suit11-img1.jpeg";
import image45 from "../../../assests/12th suit/suit11-img2.jpeg";
import image46 from "../../../assests/12th suit/suit11-img3.jpeg";
import image47 from "../../../assests/12th suit/suit11-img4.jpeg";
import image48 from "../../../assests/13th suit/suit13-img1.jpeg";
import image49 from "../../../assests/13th suit/suit13-img2.jpeg";
import image50 from "../../../assests/13th suit/suit13-img3.jpeg";
import image51 from "../../../assests/13th suit/suit13-img4.jpeg";
import image52 from "../../../assests/14th suit/suit14-img1.jpeg";
import image53 from "../../../assests/14th suit/suit14-img2.jpeg";
import image54 from "../../../assests/14th suit/suit14-img3.jpeg";
import suit10 from "../../../assests/Size Guide/suit1-10.jpeg";
import suit11 from "../../../assests/Size Guide/suit11.jpeg";
import suit12 from "../../../assests/Size Guide/suit12.jpeg";
import suit13 from "../../../assests/Size Guide/suit13.jpeg";
import suit14 from "../../../assests/Size Guide/suit14.jpeg";
import { IoEyeOutline } from 'react-icons/io5';
import { CiHeart, CiWarning, CiMemoPad } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';

const NewArrival = () => {
  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();

  // Track active product modal/info popover for Care & Disclaimers
  const [activePopover, setActivePopover] = useState(null);

  // Reusable generic care instructions for products 2-14
  const standardCareInstructions = [
    "Cold gentle wash",
    "Use mild detergent",
    "Do not bleach",
    "Dry in shade",
    "Iron on low heat",
    "Wash similar colors together",
  ];

  const products = [
    {
      id: 1,
      name: "Royal Blue Floral Printed 3-Piece Suit",
      price: 4999,
      originalPrice: 6499,
      image: image1,
      hoverImage: image2,
      images: [image1, image2, image3, image4],
      sizeGuide: suit10,
      description: "Elegant 3-piece suit featuring vibrant blue floral prints with a matching dupatta, perfect for a timeless and graceful look",
      color: "Black with Blue & purple floral print",
      packageIncludes: "Stitched Shirt, Trouser & Matching Dupatta",
      productfeature: "Premium quality 3-piece stitched suit featuring an elegant floral print, matching trousers, and a coordinated printed dupatta. Made from soft, breathable fabric for all-day comfort, making it perfect for casual wear, office wear, family gatherings, and festive occasions.",
      fabric: [
        "Premium Digital Printed Lawn Shirt",
        "Premium Digital Printed Dobby Voile Dupatta",
        "Comfort Dyed Trouser",
      ],
      Careinstruction: [
        "Cold gentle wash",
        "Use mild detergent",
        "Do not bleach",
        "Dry in shade",
        "Iron on low heat",
        "Wash similar colors together",
      ],
      disclaimer: "Actual product color may vary slightly from the image",
    },
    {
      id: 2,
      name: "Azure Blossom 3-Piece Suit",
      price: 4999,
      originalPrice: 5800,
      image: image5,
      hoverImage: image6,
      images: [image5, image6, image7, image8],
      sizeGuide: suit10,
      description: "Elevate your wardrobe with this elegant 3-piece printed suit, featuring a beautifully designed floral shirt, matching trousers, and a coordinated dupatta. Crafted from soft and comfortable fabric, it's perfect for casual wear, family gatherings, and festive occasions.",
      color: "Sky Blue, Navy Blue & White",
      packageIncludes: "3-Piece Suit (Shirt + Trouser + Dupatta)",
      productfeature: "This premium 3-piece suit is crafted from soft, breathable fabric to provide lasting comfort and style. Featuring an elegant floral printed shirt, matching trousers, and a beautifully coordinated dupatta, it offers a perfect blend of sophistication and practicality. Ideal for casual outings, office wear, family gatherings, and festive occasions, this outfit is designed to keep you looking effortlessly elegant.",
      fabric: [
        "Premium Digital Printed Lawn Shirt",
        "Premium Digital Printed Dobby Voile Dupatta",
        "Comfort Dyed Trouser",
      ],
      Careinstruction: standardCareInstructions,
      disclaimer: "Actual product color may vary slightly from the image",
    },
    {
      id: 3,
      name: "Ruby Blossom 3-Piece Suit",
      price: 4799,
      originalPrice: 5699,
      image: image9,
      hoverImage: image10,
      images: [image9, image10, image11, image12],
      sizeGuide: suit10,
      description: "Refresh your wardrobe with this elegant 3-piece printed suit featuring a beautifully designed floral shirt, matching trousers, and a coordinated dupatta. Crafted for comfort and timeless style, it's perfect for casual wear, family gatherings, and festive occasions.",
      color: "Magenta, Navy Blue & Pink",
      packageIncludes: "3-Piece Suit (Shirt + Trouser + Dupatta)",
      productfeature: "This premium 3-piece suit is crafted from soft, breathable fabric for all-day comfort. Featuring an elegant floral printed shirt, matching trousers, and a beautifully coordinated dupatta, it offers the perfect blend of style, comfort, and sophistication for casual, festive, and semi-formal occasions.",
      fabric: [
        "Premium Digital Printed Lawn Shirt",
        "Premium Digital Printed Dobby Voile Dupatta",
        "Comfort Dyed Trouser",
      ],
      Careinstruction: standardCareInstructions,
      disclaimer: "Actual product color may vary slightly from the image",
    },
    {
      id: 4,
      name: "Mint Floral Elegance 3-Piece Women's Suit",
      price: 4799,
      originalPrice: 5299,
      image: image13,
      hoverImage: image14,
      images: [image13, image14, image15],
      sizeGuide: suit10,
      description: "Refresh your wardrobe with the Mint Floral Elegance 3-Piece Women's Suit, designed with delicate floral prints on a soft mint green base. The outfit includes a beautifully printed shirt, matching trousers, and a coordinated printed dupatta, creating a graceful and sophisticated look. Crafted from soft, breathable fabric, this suit offers exceptional comfort and timeless style, making it perfect for casual outings, office wear, family gatherings, and festive occasions.",
      color: "Mint Green, Navy Blue & Lemon Yellow",
      packageIncludes: "3-Piece Suit (Shirt + Trouser + Dupatta)",
      productfeature: "This elegant 3-piece suit is crafted from soft, breathable fabric for all-day comfort. Featuring a beautifully printed floral shirt, matching trousers, and a coordinated printed dupatta, it combines timeless elegance with modern style. Perfect for casual wear, office wear, family gatherings, and festive occasions.",
      fabric: [
        "Premium Digital Printed Lawn Shirt",
        "Premium Digital Printed Dobby Voile Dupatta",
        "Comfort Dyed Trouser",
      ],
      Careinstruction: standardCareInstructions,
      disclaimer: "Actual product color may vary slightly from the image",
    },
    {
      id: 5,
      name: "Emerald Botanical 3-Piece Women's Suit",
      price: 4599,
      originalPrice: 5200,
      image: image16,
      hoverImage: image17,
      images: [image16, image17, image18, image19],
      sizeGuide: suit10,
      description: "Refresh your wardrobe with the Emerald Botanical 3-Piece Women's Suit, featuring elegant botanical prints on a rich emerald green base. Complete with a matching trouser and a beautifully printed dupatta, this outfit offers a perfect combination of comfort, sophistication, and timeless style. Crafted from soft, breathable fabric, it is ideal for casual outings, office wear, family gatherings, and festive occasions.",
      color: "Emerald Green, Teal, Rust & Navy Blue",
      packageIncludes: "3-Piece Suit (Shirt + Trouser + Dupatta)",
      productfeature: "This premium 3-piece suit is crafted from soft, breathable fabric to ensure all-day comfort. Featuring a beautifully printed botanical shirt, matching trousers, and a coordinated printed dupatta, it combines elegant design with everyday practicality. Perfect for casual wear, office wear, family gatherings, and festive occasions.",
      fabric: [
        "Premium Digital Printed Lawn Shirt",
        "Premium Digital Printed Dobby Voile Dupatta",
        "Comfort Dyed Trouser",
      ],
      Careinstruction: standardCareInstructions,
      disclaimer: "Actual product color may vary slightly from the image",
    },
    {
      id: 6,
      name: "Autumn Mustard Printed 3-Piece Suit",
      price: 4499,
      originalPrice: 5499,
      image: image20,
      hoverImage: image21,
      images: [image20, image21, image22, image23],
      sizeGuide: suit10,
      description: "A graceful mustard yellow 3-piece printed suit featuring elegant maroon and beige floral patterns, paired with a beautifully printed rust brown dupatta. Perfect for casual gatherings, daytime events, and festive wear with a sophisticated traditional look.",
      color: "Mustard Yellow • Rust Brown • Maroon • Beige • Autumn Tones",
      packageIncludes: "Printed Shirt, Printed Trouser, Printed Dupatta",
      productfeature: "Experience timeless elegance with this premium 3-piece unstitched printed suit, crafted from soft, breathable fabric for all-day comfort. The beautiful mustard yellow shirt features an elegant floral print, perfectly complemented by a richly printed rust brown dupatta that adds a sophisticated touch. Lightweight and easy to wear, this outfit is ideal for casual outings, festive occasions, and everyday elegance. Its vibrant color combination and graceful design make it a stylish addition to any wardrobe.",
      fabric: [
        "Premium Digital Printed Lawn Shirt",
        "Premium Digital Printed Dobby Voile Dupatta",
        "Comfort Dyed Trouser",
      ],
      Careinstruction: standardCareInstructions,
      disclaimer: "Actual product color may vary slightly from the image",
    },
    {
      id: 7,
      name: "Ivory Heritage 3-Piece Women's Suit",
      price: 4499,
      originalPrice: 5499,
      image: image24,
      hoverImage: image25,
      images: [image24, image25, image26, image27],
      sizeGuide: suit10,
      description: "Elevate your everyday style with the Ivory Heritage 3-Piece Women's Suit, featuring elegant floral prints on a soft ivory base with a beautifully coordinated geometric printed dupatta. Paired with matching trousers, this outfit combines timeless charm with all-day comfort. Crafted from soft, breathable fabric, it is perfect for casual outings, office wear, family gatherings, and festive occasions.",
      color: "Ivory, Navy Blue, Rust & Beige",
      packageIncludes: "3-Piece Suit (Shirt + Trouser + Dupatta)",
      productfeature: "This premium 3-piece suit is crafted from soft, breathable fabric for lasting comfort and elegance. Featuring a beautifully printed floral shirt, matching trousers, and a coordinated geometric printed dupatta, it offers a perfect balance of style and sophistication for casual, office, and festive wear.",
      fabric: [
        "Premium Digital Printed Lawn Shirt",
        "Premium Digital Printed Dobby Voile Dupatta",
        "Comfort Dyed Trouser",
      ],
      Careinstruction: standardCareInstructions,
      disclaimer: "Actual product color may vary slightly from the image",
    },
    {
      id: 8,
      name: "Golden Blossom",
      price: 4499,
      originalPrice: 5499,
      image: image28,
      hoverImage: image29,
      images: [image28, image29, image30, image31],
      sizeGuide: suit10,
      description: "This premium 3-piece suit is crafted from soft, breathable fabric for exceptional comfort and style. Featuring a beautifully printed floral shirt, matching trousers, and a coordinated printed dupatta, it offers a graceful look that is perfect for casual wear, office wear, family gatherings, and festive occasions.",
      color: "Yellow, White & Rust Orange with Black accents",
      packageIncludes: "1 Printed Shirt, 1 Dyed Straight Trouser, 1 Printed Dupatta",
      productfeature: "Premium quality 3-piece stitched suit featuring an elegant floral print, matching trousers, and a coordinated printed dupatta. Made from soft, breathable fabric for all-day comfort, making it perfect for casual wear, office wear, family gatherings, and festive occasions.",
      fabric: [
        "Premium Digital Printed Lawn Shirt",
        "Premium Digital Printed Dobby Voile Dupatta",
        "Comfort Dyed Trouser",
      ],
      Careinstruction: standardCareInstructions,
      disclaimer: "Actual product color may vary slightly from the image",
    },
    {
      id: 9,
      name: "Blush Mosaic ✨",
      price: 4699,
      originalPrice: 5499,
      image: image32,
      hoverImage: image33,
      images: [image32, image33, image34, image35],
      sizeGuide: suit10,
      description: "Elevate your everyday style with this elegant 3-piece printed suit, featuring a soft blush pink shirt adorned with vibrant floral-inspired prints. Paired with a striking geometric printed dupatta and matching dyed straight trousers, this outfit offers the perfect balance of comfort, sophistication, and modern charm. Ideal for casual wear, family gatherings, and semi-formal occasions. ✨",
      color: "Blush Pink, Purple & Black with Olive Green accents",
      packageIncludes: "1 Printed Shirt, 1 Dyed Straight Trouser, 1 Printed Dupatta",
      productfeature: "Premium quality 3-piece stitched is crafted from soft, breathable fabric for all-day comfort and effortless elegance. Featuring a beautifully printed botanical design, matching trousers, and a coordinated printed dupatta with tassel detailing, it offers a stylish and sophisticated look that's perfect for casual wear, office wear, family gatherings, and festive occasions.",
      fabric: [
        "Premium Digital Printed Lawn Shirt",
        "Premium Digital Printed Dobby Voile Dupatta",
        "Comfort Dyed Trouser",
      ],
      Careinstruction: standardCareInstructions,
      disclaimer: "Actual product color may vary slightly from the image",
    },
    {
      id: 10,
      name: "Midnight Flora ✨",
      price: 4699,
      originalPrice: 5499,
      image: image36,
      hoverImage: image37,
      images: [image36, image37, image38, image39],
      sizeGuide: suit10,
      description: "Make a statement with this elegant 3-piece printed suit featuring a rich black base adorned with vibrant botanical prints. Paired with a beautifully printed dupatta and matching dyed trousers, this outfit combines timeless elegance with everyday comfort, making it perfect for casual wear, festive gatherings, and semi-formal occasions.✨",
      color: "Black, Rust Orange & Royal Blue with Purple accents",
      packageIncludes: "1 Printed Shirt, 1 Dyed Straight Trouser, 1 Printed Dupatta",
      productfeature: "This premium 3-piece suit is crafted from soft, breathable fabric for all-day comfort and effortless elegance. Featuring a beautifully printed botanical design, matching trousers, and a coordinated printed dupatta with tassel detailing, it offers a stylish and sophisticated look that's perfect for casual wear, office wear, family gatherings, and festive occasions.",
      fabric: [
        "Premium Digital Printed Lawn Shirt",
        "Premium Digital Printed Dobby Voile Dupatta",
        "Comfort Dyed Trouser",
      ],
      Careinstruction: standardCareInstructions,
      disclaimer: "Actual product color may vary slightly from the image",
    },
    {
      id: 11,
      name: "Crimson Grace ✨",
      price: 3499,
      originalPrice: 4000,
      image: image40,
      hoverImage: image41,
      images: [image40, image41, image42, image43],
      sizeGuide: suit11,
      description: "Effortlessly elegant and timeless, this vibrant magenta kurta set is crafted from soft striped fabric with delicate embroidered neckline, tassel details, and beautifully finished sleeves. A perfect choice for everyday wear, casual outings, and festive gatherings✨",
      color: "Crimson Red",
      packageIncludes: "1 Embroidered kurta, 1 matching lawn Trouser",
      productfeature: "This elegant 2-piece suit is crafted from soft, breathable fabric for exceptional comfort and everyday wear. Featuring a minimalist design with delicate neckline detailing, a straight-cut shirt, and matching trousers, it offers a timeless and sophisticated look that is perfect for casual outings, office wear, family gatherings, and semi-formal occasions.",
      fabric: [
        "Premium Printed Lawn",
        "Premium Printed Lawn Trouser",
      ],
      Careinstruction: standardCareInstructions,
      disclaimer: "Actual product color may vary slightly from the image",
    },
    {
      id: 12,
      name: "Alif Wears – Blush Breeze Printed Kurti",
      price: 2500,
      originalPrice: 3500,
      image: image44,
      hoverImage: image45,
      images: [image44, image45, image46, image47],
      sizeGuide: suit12,
      description: "Soft pink printed kurti featuring elegant white lace detailing on the neckline, sleeves, and hem. Paired with plain white wide-leg trousers for a graceful and comfortable look. Perfect for casual wear and summer days.",
      color: "Pink & white",
      packageIncludes: "1 Printed kurta, 1 Plain white wide leg Trouser",
      productfeature: "This elegant 2-piece suit is crafted from soft, breathable fabric for all-day comfort and effortless style. Featuring a graceful pink geometric print, delicate lace detailing on the sleeves and hem, a straight-cut shirt, and matching trousers, it offers a refined look that's perfect for casual wear, office wear, family gatherings, and semi-formal occasions.",
      fabric: [
        "Premium Printed Cotton",
        "Premium Printed Cotton Trouser",
      ],
      Careinstruction: standardCareInstructions,
      disclaimer: "Actual product color may vary slightly from the image",
    },
    {
      id: 13,
      name: "Royal Blue Classic Suit",
      price: 2500,
      originalPrice: 3200,
      image: image48,
      hoverImage: image49,
      images: [image48, image49, image50, image51],
      sizeGuide: suit13,
      description: "Elevate your everyday wardrobe with the Royal Sapphire 2-Piece Women's Suit, designed in a rich royal blue shade with elegant embroidered detailing. Featuring a graceful long shirt and matching trousers, this outfit offers a perfect combination of simplicity, comfort, and timeless style. Crafted from soft, breathable fabric, it is ideal for casual wear, office wear, and semi-formal occasions.",
      color: "Royal Blue",
      packageIncludes: "2-Piece Suit (Shirt + Trouser)",
      productfeature: "This premium 2-piece suit is crafted from soft, breathable fabric to provide all-day comfort. Featuring delicate embroidered detailing, a graceful long shirt, and matching trousers, it offers a clean and sophisticated look suitable for casual outings, office wear, and semi-formal occasions.",
      fabric: [
        "Premium Printed Lawn",
        "Premium Printed Lawn Trouser",
      ],
      Careinstruction: standardCareInstructions,
      disclaimer: "Actual product color may vary slightly from the image",
    },
    {
      id: 14,
      name: "Ivory Botanical Printed 2-Piece Suit",
      price: 3200,
      originalPrice: 4000,
      image: image52,
      hoverImage: image53,
      images: [image52, image53, image54],
      sizeGuide: suit14,
      description: "Soft, stylish, and versatile—this botanical printed 2-piece suit is perfect for everyday and semi-formal wear.",
      color: "Ivory Beige & Charcoal Grey print color",
      packageIncludes: "1 Printed kurta, 1 printed trouser",
      productfeature: "This elegant 2-piece suit is crafted from soft, breathable fabric for all-day comfort and effortless style. Featuring a sophisticated botanical print, a straight-cut shirt with full sleeves, and matching printed trousers, it offers a timeless look that's perfect for casual outings, office wear, and family gatherings.",
      fabric: [
        "Premium Printed Lawn",
        "Premium Printed Lawn Trouser",
      ],
      Careinstruction: standardCareInstructions,
      disclaimer: "Actual product color may vary slightly from the image",
    }
  ];

  const handleWishlist = (e, product) => {
    e.stopPropagation();
    addToWishlist(product);
    navigate("/wishlist");
  };

  const handleSelectOptions = (product) => {
    navigate('/product-details', { state: { product } });
  };

  const togglePopover = (e, productId) => {
    e.stopPropagation(); // Avoid triggering route details when clicking info toggles
    setActivePopover(activePopover === productId ? null : productId);
  };

  return (
    <section className='px-4 sm:px-8 md:px-16 lg:px-20 py-12 md:py-20 bg-gray-50' id='new-arrival'>
      {/* Title */}
      <div className='mb-10 md:mb-16 text-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-gray-900'>
          New Arrivals
        </h1>
        <div className='w-16 h-[3px] bg-red-400 mx-auto mt-3 rounded-full'></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleSelectOptions(product)}
            className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group relative"
          >
            {/* Image Wrapper */}
            <div className="relative h-[240px] sm:h-[320px] md:h-[380px] lg:h-[400px] overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {product.hoverImage && (
                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500 group-hover:scale-105"
                />
              )}

              {/* Badges Layout */}
              <div className="absolute left-2 top-2 sm:left-3 sm:top-3 flex flex-col gap-1.5 z-10">
                <span className="bg-red-500 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm w-fit">
                  New
                </span>
              </div>

              {/* Interactive Floating Action Icons */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex flex-col gap-2 sm:gap-3 lg:opacity-0 lg:group-hover:opacity-100 transition duration-300 z-20">
                <button
                  onClick={() => handleSelectOptions(product)}
                  className="bg-white p-2 sm:p-3 rounded-full shadow-md text-gray-700 hover:bg-black hover:text-white transition-all duration-200 cursor-pointer active:scale-95"
                  title="View details"
                >
                  <IoEyeOutline size={18} className="sm:w-5 sm:h-5" />
                </button>

                <button
                  onClick={(e) => handleWishlist(e, product)}
                  className="bg-white p-2 sm:p-3 rounded-full shadow-md text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer active:scale-95"
                  title="Add to wishlist"
                >
                  <CiHeart size={18} className="sm:w-5 sm:h-5 font-bold" />
                </button>

                {/* Info button for care instructions & disclaimer on-grid */}
                <button
                  onClick={(e) => togglePopover(e, product.id)}
                  className={`p-2 sm:p-3 rounded-full shadow-md transition-all duration-200 cursor-pointer active:scale-95 ${activePopover === product.id
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-800 hover:text-white'
                    }`}
                  title="Care & Disclaimer"
                >
                  <CiMemoPad size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Quick Care/Disclaimer Popover Drawer overlay */}
              {activePopover === product.id && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute inset-0 bg-black/90 text-white p-4 sm:p-6 z-30 flex flex-col justify-between overflow-y-auto transition-opacity duration-300"
                >
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-red-400 flex items-center gap-1 border-b border-gray-700 pb-2 mb-2">
                      <CiMemoPad size={16} /> Care Instructions
                    </h4>
                    <ul className="text-[10px] sm:text-xs text-gray-300 space-y-1 list-disc list-inside">
                      {product.Careinstruction?.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 border-t border-gray-800 pt-2">
                    <p className="text-[9px] sm:text-[11px] text-yellow-500/90 flex items-start gap-1 leading-relaxed">
                      <span className="shrink-0 mt-0.5"><CiWarning size={12} /></span>
                      <span><strong>Disclaimer:</strong> {product.disclaimer}</span>
                    </p>
                    <button
                      onClick={(e) => togglePopover(e, product.id)}
                      className="mt-3 w-full py-1 text-[10px] uppercase font-bold tracking-wider bg-white/10 hover:bg-white/20 text-white rounded transition"
                    >
                      Close Info
                    </button>
                  </div>
                </div>
              )}

              {/* Slide-Up Select Button (Hidden on touch screens, visible on Desktop hover) */}
              <div className="hidden lg:block absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition duration-300 z-10">
                <button
                  onClick={() => handleSelectOptions(product)}
                  className="w-full cursor-pointer bg-black/90 py-3.5 text-white uppercase text-xs font-semibold tracking-wider hover:bg-red-500 transition-colors"
                >
                  Select Options
                </button>
              </div>
            </div>

            {/* Product Details Area */}
            <div className="p-3 sm:p-5 flex flex-col flex-grow text-center">
              <h2 className="font-medium text-xs sm:text-sm md:text-base text-gray-800 line-clamp-2 h-8 sm:h-12 hover:text-red-500 transition-colors duration-200">
                {product.name}
              </h2>

              <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-3 mt-auto pt-2">
                <span className="text-gray-400 line-through text-[10px] sm:text-sm">
                  Rs {product.originalPrice.toLocaleString()}
                </span>
                <span className="text-red-500 text-xs sm:text-lg font-bold">
                  Rs {product.price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
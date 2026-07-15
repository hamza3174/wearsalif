import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Wishlist from './Wishlist'
import ProductDetails from './productDetails'
import Cart from './Cart'
import BillingForm from '../../components/checkOut/BillingForm'

const Frontened = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/product-details' element={<ProductDetails />} />
                <Route path='/billingForm' element={<BillingForm />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Frontened

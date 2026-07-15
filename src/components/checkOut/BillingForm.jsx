import React, { useState } from 'react'
import { Form, Input, Select, Row, Col, Typography, message } from 'antd'
import { useCart } from '../../context/CartContext'
import { IoArrowBackOutline } from 'react-icons/io5'
import emailjs from "@emailjs/browser";
import { useNavigate } from 'react-router-dom'

const { Title, Text } = Typography
const { TextArea } = Input

const BillingForm = () => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const { cartItems } = useCart()

    // Flat standard shipping rate of Rs 250
    const SHIPPING_CHARGE = 250;

    // Calculate dynamic subtotal
    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )

    const onFinish = (values) => {

        setLoading(true);

        const products = cartItems
            .map(
                (item) =>
                    `${item.name}
Size: ${item.size || "M"}
Quantity: ${item.quantity}
Price: Rs ${item.price}`
            )
            .join("\n\n");

        emailjs
            .send(
                "service_csw7gjb",
                "template_5l6121a",
                {
                    first_name: values.firstName,
                    last_name: values.lastName,
                    country: "Pakistan",
                    street_address:
                        values.streetAddress1 +
                        (values.streetAddress2
                            ? ", " + values.streetAddress2
                            : ""),
                    city: values.city,
                    province: values.province,
                    postcode: values.postcode,
                    phone: values.phone,
                    email: values.email,
                    order_notes: values.orderNotes || "No notes",
                    products: products,
                    // Sending the absolute total (Subtotal + Shipping) to your email receipt
                    total: subtotal + SHIPPING_CHARGE,
                },
                "IGfRwz3OPsM6bs4oz"
            )
            .then(() => {
                message.success("Order placed successfully!");
                form.resetFields();
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                message.error(error.text);
                setLoading(false);
            });
    };

    // Redirect to cart if the user navigates directly to checkout with an empty cart
    if (cartItems.length === 0) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-4">
                <Text type="secondary" className="mb-4">Your checkout session is empty.</Text>
                <button
                    onClick={() => navigate('/cart')}
                    className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-gray-900 transition"
                >
                    <IoArrowBackOutline size={14} /> Back to Cart
                </button>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 bg-white">
            {/* Split layout into a responsive grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                {/* Left Side: Billing Details Form (Takes up 2 columns on large screens) */}
                <div className="lg:col-span-2">
                    <Title level={2} style={{ marginBottom: '24px', fontWeight: 700 }}>Billing details</Title>

                    <Form
                        form={form}
                        layout="vertical"
                        name="billing_form"
                        onFinish={onFinish}
                        requiredMark="optional"
                    >
                        {/* First Name & Last Name */}
                        <Row gutter={16}>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="First name"
                                    name="firstName"
                                    rules={[{ required: true, message: 'Please enter your first name' }]}
                                >
                                    <Input size="large" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Last name"
                                    name="lastName"
                                    rules={[{ required: true, message: 'Please enter your last name' }]}
                                >
                                    <Input size="large" />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Country */}
                        <Form.Item
                            label="Country / Region"
                            name="country"
                            initialValue="pk"
                            rules={[{ required: true, message: 'Please select your country' }]}
                        >
                            <Select
                                size="large"
                                options={[
                                    { label: "Pakistan", value: "pk" }
                                ]}
                            />
                        </Form.Item>

                        {/* Street Address */}
                        <Form.Item
                            label="Street address"
                            name="streetAddress1"
                            rules={[{ required: true, message: 'Please enter your street address' }]}
                            style={{ marginBottom: '12px' }}
                        >
                            <Input size="large" placeholder='House number and street name' />
                        </Form.Item>

                        <Form.Item name="streetAddress2">
                            <Input size="large" placeholder='Apartment, suite, unit, etc. (optional)' />
                        </Form.Item>

                        {/* City, Province & Postcode */}
                        <Row gutter={16}>
                            <Col xs={24} sm={8}>
                                <Form.Item
                                    label="Town / City"
                                    name="city"
                                    rules={[{ required: true, message: 'Please enter your city' }]}
                                >
                                    <Input size="large" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={8}>
                                <Form.Item
                                    label="Province"
                                    name="province"
                                    rules={[{ required: true, message: 'Please select your province' }]}
                                >
                                    <Select
                                        size="large"
                                        placeholder="Select province"
                                        options={[
                                            { label: "Punjab", value: "punjab" },
                                            { label: "Sindh", value: "sindh" },
                                            { label: "Khyber Pakhtunkhwa", value: "khyber_pakhtunkhwa" },
                                            { label: "Balochistan", value: "balochistan" },
                                            { label: "Islamabad Capital Territory", value: "islamabad" }
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={8}>
                                <Form.Item
                                    label="Postcode / ZIP"
                                    name="postcode"
                                    rules={[{ required: true, message: 'Please enter your postcode' }]}
                                >
                                    <Input size="large" />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Phone & Email */}
                        <Row gutter={16}>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Phone"
                                    name="phone"
                                    rules={[{ required: true, message: 'Please enter your phone number' }]}
                                >
                                    <Input size="large" type="tel" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Email address"
                                    name="email"
                                    rules={[
                                        { required: true, message: 'Please enter your email' },
                                        { type: 'email', message: 'Please enter a valid email address' }
                                    ]}
                                >
                                    <Input size="large" type="email" />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Order Notes */}
                        <Form.Item
                            label="Order notes (optional)"
                            name="orderNotes"
                        >
                            <TextArea
                                rows={4}
                                placeholder='Notes about your order, e.g. special notes for delivery.'
                            />
                        </Form.Item>
                    </Form>
                </div>

                {/* Right Side: Sticky Order Summary Box (Takes up 1 column) */}
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 lg:p-8 sticky top-6 mt-12 lg:mt-0">
                    <h2 className="text-lg font-bold text-gray-900 mb-6">Your Order</h2>

                    {/* Compact Item List */}
                    <div className="max-h-[240px] overflow-y-auto mb-6 pr-2 space-y-4 border-b border-gray-200 pb-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between gap-4 text-sm">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-14 object-cover rounded-lg bg-white border border-gray-100 flex-shrink-0"
                                    />
                                    <div>
                                        <h4 className="font-medium text-gray-900 line-clamp-1 max-w-[150px]">{item.name}</h4>
                                        <p className="text-xs text-gray-400">Qty: {item.quantity} • {item.size || 'M'}</p>
                                    </div>
                                </div>
                                <span className="font-semibold text-gray-900 text-xs">
                                    Rs {(item.price * item.quantity).toLocaleString()}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Pricing Math breaks */}
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
                            <span>Total</span>
                            <span className="text-lg font-extrabold text-gray-900">
                                Rs {(subtotal + SHIPPING_CHARGE).toLocaleString()}
                            </span>
                        </div>
                    </div>


                    <button
                        onClick={() => form.submit()}
                        disabled={loading}
                        className={`w-full py-4 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs transition duration-300 shadow-md text-center block ${loading
                            ? "bg-gray-700 cursor-not-allowed"
                            : "bg-black hover:bg-gray-900 cursor-pointer text-white"
                            }`}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                    />
                                </svg>
                                Sending...
                            </div>
                        ) : (
                            "Place Order"
                        )}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default BillingForm
// pages/about.js

import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-900 text-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-1.jpeg)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold">Welcome to Our World</h1>
                    <p className="mt-4 text-lg md:text-xl">Where Innovation Meets Excellence</p>
                </div>
            </section>


            {/* Contact Section */}
            <section className="py-20 bg-gray-800">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
                    <div className="flex flex-col md:flex-row md:justify-center">
                        <form className="md:w-1/2 bg-gray-700 p-8 rounded-lg">
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none" placeholder="Your Name" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none" placeholder="Your Email" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                                <textarea id="message" className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-lg text-lg font-semibold">Send Message</button>
                        </form>
                        <div className="md:w-1/2 mt-12 md:mt-0 md:ml-8">
                            <div className="h-64">
                                <iframe className="w-full h-full rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27990962735!2d-74.25986776056904!3d40.69767006370874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDBsNDInNTMuNiJOIDc0wrAxNyc1Ni4zIlc!5e0!3m2!1sen!2sus!4v1616642872360!5m2!1sen!2sus" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 bg-gray-900 text-center">
                <p>&copy; 2024 Company Name. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default About;

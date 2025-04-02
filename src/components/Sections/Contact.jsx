import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
    // Initialize EmailJS with the public key
    emailjs.init("3WGJbtShclpxi80VB");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const SI = "service_walz3kr"; // Service ID
    const TI = "template_p0fd5cj"; // Template ID

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the form data using EmailJS
        emailjs
            .sendForm(SI, TI, e.target) // Pass the form element (e.target)
            .then(
                (result) => {
                    alert("Message sent!");
                    // Reset the form data
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    alert("Oops, message not sent!");
                    console.error(error); // Log the error for debugging
                }
            );
    };
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"



        >
            <RevealOnScroll>

                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        {" "}
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-white/10 rounded px-4 py-3 text-white transition-all focus:outline-none focus:border focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name..."
                                value={formData.name}
                                onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-white/10 rounded px-4 py-3 text-white transition-all focus:outline-none   focus:border-blue-500 focus:border focus:bg-blue-500/5"
                                placeholder="Email..."
                                value={formData.email}
                                onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
                            />
                        </div>

                        {/* Message Textarea */}
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="4"
                                className="w-full bg-white/10 rounded px-4 py-3 text-white transition-all focus:outline-none focus:border focus:border-blue-500 focus:bg-blue-500/5 resize-none"
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="relative">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded transition duration-300 hover:-translate-y-1 hover:shadow-[0px_0px_15px_rgba(59,130,246,0.4)]"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>



            </RevealOnScroll>

        </section>




    );




}
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {

    const form = useRef();

    const servicekey = process.env.serviceKey
    const templateid = process.env.templateId
    const publicKey = process.env.publicKey

    // console.log("information")
    // console.log(servicekey)
    // console.log(templateid)
    // console.log(publicKey)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(servicekey, templateid, form.current, {
            publicKey: publicKey,
        })
        .then(
            () => {
            console.log('SUCCESS!');
            console.log(process.env)
            e.target.reset()
            },

            (error) => {
            console.log('FAILED...', error.text);
            console.log(process.env)
            console.log(`Service key: ${servicekey}`)
            },
        );
    };


    return (
        <div className="max-w-lg md:max-w-4xl mx-auto p-6 rounded-lg bg-gray-800 shadow-lg">
            <p className='text-white mb-8 text-xl text-center'>Feel free to get in contact with me whether it's to talk, or ask me questions; I would love to chat with you! 😊</p>
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-5">
                    <input
                        type="text"
                        name="firstname"
                        placeholder='First Name'
                        required
                        className="mt-1 block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="text"
                        name="lastname"
                        placeholder='Last Name'
                        required
                        className="mt-1 block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        required
                        className="mt-1 block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="mb-5">
                    <textarea
                        name="message"
                        placeholder='Your Message'
                        required
                        rows="4"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    value="send"
                    className="w-full py-3 px-4 bg-blue-500 rounded hover:bg-white border border-white font-semibold transition duration-300"
                >
                    <span style={{
                        background: '-webkit-linear-gradient(50deg, #B16CEA, #FF5E69, #FF8A56, #FFA84B)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline'
                    }}>Send Message</span>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
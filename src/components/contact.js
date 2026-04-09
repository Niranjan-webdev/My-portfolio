import React, { useState } from 'react';
import { github, linkedIn, DevTo } from "./index";
import emailjs from '@emailjs/browser';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      alert('Please fill in all required fields.');
      return;
    }
  
    emailjs.send(
      'YOUR_SERVICE_ID',      // from EmailJS dashboard
      'YOUR_TEMPLATE_ID',     // from EmailJS dashboard
      {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
        to_email: 'niranjan.g2k@gmail.com',
      },
      'YOUR_PUBLIC_KEY'       // from EmailJS dashboard
    )
    .then(() => {
      alert('Message sent successfully!');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <>
    <section className="w-full px-8 py-12 flex flex-col gap-16 md:items-center justify-between md:flex-row md:px-20 md:py-24">

      {/* ── Left side ── */}
      <div className=" flex flex-col text-center md:text-left md:w-1/2">
        <p className="text-sm font-bold tracking-widest text-[#2dd4bf] mb-4">- CONTACT</p>
        <h2 className="text-5xl font-black text-gray-900 mb-8 leading-tight">
          Let's connect
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10 text-center md:text-left md:max-w-md">
          Do you have a{' '}
          <span className="text-[#7c3aed] font-semibold">question</span>,{' '}
          <span className="text-[#7c3aed] font-semibold">feedback</span>
          , or would like to get in touch? Whether you're working in{' '}
          <span className="text-[#2dd4bf] font-semibold">tech</span>
          , recruiting, or just reaching out — I'm happy to hear from you and will get back to you shortly.
        </p>

        {/* Divider */}
        <hr className="border-gray-200 mb-10" />

        {/* Social icons */}
        <div className="flex justify-center md:items-center md:justify-start gap-5">
          <a href='https://github.com/Niranjan-webdev' target='_blank' className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-[#2dd4bf] flex items-center justify-center transition-colors duration-200 group">
            <img src={github} alt="GitHub" className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-200" />
          </a>
          <a href='https://www.linkedin.com/in/niranjan-g2k/' target='_blank' className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-[#2dd4bf] flex items-center justify-center transition-colors duration-200 group">
            <img src={linkedIn} alt="LinkedIn" className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-200" />
          </a>
          {/* <a href="#" className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-[#2dd4bf] flex items-center justify-center transition-colors duration-200 group">
            <img src={DevTo} alt="Dev.to" className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-200" />
          </a> */}
        </div>
      </div>

      {/* ── Right side — form card ── */}
      <div className="bg-[#f0f4f8] rounded-3xl p-10 flex flex-col gap-4 md:w-1/2 ">

        {/* Name + Email row */}
        <div className="flex gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={form.name}
            onChange={handleChange}
            className="w-1/2 bg-white rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 border border-transparent focus:border-[#2dd4bf] focus:outline-none transition-colors duration-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={form.email}
            onChange={handleChange}
            className="w-1/2 bg-white rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 border border-transparent focus:border-[#2dd4bf] focus:outline-none transition-colors duration-200"
          />
        </div>

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full bg-white rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 border border-transparent focus:border-[#2dd4bf] focus:outline-none transition-colors duration-200"
        />

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject*"
          value={form.subject}
          onChange={handleChange}
          className="w-full bg-white rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 border border-transparent focus:border-[#2dd4bf] focus:outline-none transition-colors duration-200"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message*"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-white rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 border border-transparent focus:border-[#2dd4bf] focus:outline-none transition-colors duration-200 resize-none"
        />

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#2dd4bf] hover:bg-[#0d9488] text-white font-bold text-sm tracking-widest py-5 rounded-xl flex items-center justify-center gap-3 transition-colors duration-200 mt-2"
        >
          SEND MESSAGE
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>

      </div>
      
    </section>
    <div className='copy__right flex flex-col items-center justify-center mt-6 mb-4'>
        <p className='text-base font-[500]'>2026 Niranjan Govinthan. All rights reserved.</p>
        <p className='text-base font-[500]'>{'<Made with React + JS & ❤️/>'}</p>
      </div>
    </>
  );
}

export default Contact;
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  // WhatsApp booking link
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=919007062180&text=Hi,%20I%20want%20to%20book%20a%20room%20at%20Kingsukh%20Guest%20House.";

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section className="container mx-auto px-6 py-12" id="contact">
      <h2 className="text-3xl font-bold text-green-900 text-center mb-10">
        Contact Us
      </h2>

      {/* Contact Info + Form */}
      <div className="grid md:grid-cols-2 gap-8 items-start ">
        {/* LEFT: Contact Info */}
        <div className="bg-green-900 text-white p-8 rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <p className="flex items-center mb-4">
              <FaMapMarkerAlt className="mr-3" /> Beside Barshal Water Tank,
              Manpur, Barhanti, West Bengal 723156
            </p>
            <p className="flex items-center mb-4">
              <FaEnvelope className="mr-3" /> kkghosh0099@gmail.com
            </p>
            <p className="flex items-center mb-6">
              <FaPhone className="mr-3" /> +91 9007062180
            </p>
          </div>
          <div className="flex space-x-4 text-3xl mt-5 ">
            <FaFacebook className="cursor-pointer text-blue-400 hover:text-blue-600" />
            <FaInstagram className="cursor-pointer text-pink-500 hover:text-pink-300" />
            <FaTwitter className="cursor-pointer text-sky-400 hover:text-blue-500" />
            <FaLinkedin className="cursor-pointer text-blue-500 hover:text-blue-600" />
          </div>
        </div>

        {/* RIGHT: Send a Message Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg shadow-green-400"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-6">
            Send a Message
          </h3>

          {/* First + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              className="w-full border-b p-2 focus:outline-none"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              className="w-full border-b p-2 focus:outline-none"
              placeholder="Last Name"
              required
            />
          </div>

          {/* Email + Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              className="w-full border-b p-2 focus:outline-none"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              className="w-full border-b p-2 focus:outline-none"
              placeholder="Mobile Number"
              required
            />
          </div>

          {/* Message */}
          <textarea
            className="w-full border-b p-2 focus:outline-none mb-6"
            rows="3"
            placeholder="Write your message here..."
            required
          ></textarea>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Book on WhatsApp
            </a>
          </div>
        </form>
      </div>

      {/* Google Map Section */}
      <div className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.462141787309!2d86.85907667462408!3d23.23812067903314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f42288e87a65cf%3A0xc6ebc3d34dd969b2!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          ✅ Your message has been sent successfully!
        </div>
      )}
    </section>
  );
}

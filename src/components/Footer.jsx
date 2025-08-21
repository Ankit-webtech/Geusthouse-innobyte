import { Link as ScrollLink } from "react-scroll";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const whatsappLink = `https://api.whatsapp.com/send?phone=919007062180&text=Hi,%20I%20want%20to%20book%20a%20room%20at%20Kingsukh%20Guest%20House.`;

  return (
    <footer className="bg-black text-gray-300 py-12 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Guesthouse */}
        <div>
          <h3 className="text-green-800 text-xl font-bold mb-4">
            Kingsukh <br /> Guest House
          </h3>
          <p className="mb-4">
            Discover a world of comfort, luxury, and adventure at our guesthouse.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 border-2 px-5 py-2 rounded-lg hover:bg-green-900 hover:text-black"
          >
            Book Now
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-green-900 font-semibold mb-4">QUICK LINKS</h4>
          <ul className="space-y-2">
            <li><ScrollLink to="home" smooth duration={500} className="cursor-pointer hover:text-green-600">Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth duration={500} className="cursor-pointer hover:text-green-600">About</ScrollLink></li>
            <li><ScrollLink to="rooms" smooth duration={500} className="cursor-pointer hover:text-green-600">Rooms</ScrollLink></li>
            <li><ScrollLink to="gallery" smooth duration={500} className="cursor-pointer hover:text-green-600">Gallery</ScrollLink></li>
            <li><ScrollLink to="contact" smooth duration={500} className="cursor-pointer hover:text-green-600">Contact</ScrollLink></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-green-900 font-semibold mb-4">OUR SERVICES</h4>
          <ul className="space-y-2">
            <li>Concierge Assistance</li>
            <li>Flexible Booking Options</li>
            <li>Airport Transfers</li>
            <li>Wellness & Recreation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-green-900 font-semibold mb-4">CONTACT US</h4>
          <p className="mb-2 hover:text-blue-300">Beside Barshal Water Tank, Manpur, Barhanti</p>
          <p className="mb-2 hover:text-blue-500">Email: kkghosh0099@gmail.com</p>
          <p className="mb-4 hover:text-blue-700">Phone: +91 9007062180</p>
          <div className="flex space-x-4">
            <FaFacebook className="cursor-pointer text-blue-500" />
            <FaInstagram className="cursor-pointer text-pink-600" />
            <FaYoutube className="cursor-pointer text-red-600" />
            <FaTwitter className="cursor-pointer text-blue-400" />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © 2025 Kingsukh Guest House. All Rights Reserved.
      </div>
    </footer>
  );
}

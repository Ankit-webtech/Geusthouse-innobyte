import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-green-200 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl text-green-900 font-bold hover:text-black hover:wrap-anywhere">
          Kingsukh Guesthouse
        </h1>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <Link to="home" smooth duration={500} className="cursor-pointer hover:text-green-400">
            Home
          </Link>
          <Link to="about" smooth duration={500} className="cursor-pointer hover:text-green-400">
            About
          </Link>
          <Link to="rooms" smooth duration={500} className="cursor-pointer hover:text-green-400">
            Rooms
          </Link>
          <Link to="gallery" smooth duration={500} className="cursor-pointer hover:text-green-400">
            Gallery
          </Link>
          <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-green-400">
            Contact
          </Link>
        </div>

        {/* Book Now Button (Desktop Only) */}
        <button className="hidden md:block bg-accent border-1 text-green-300 px-4 py-2 rounded-lg hover:border-2 hover:text-green-900 ">
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-900 text-2xl "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden w-3xs border bg-primary text-green-200 flex flex-col items-center py-5 space-y-4 cursor-pointer hover:bg-green-100 hover:text-green-700 ">
          <Link onClick={() => setIsOpen(false)} to="home" smooth duration={500}>
            <h1 class="hover:text-emerald-700 hover:border hover:rounded-3xl hover:p-1  ">Home</h1>
          </Link>
          <Link onClick={() => setIsOpen(false)} to="about" smooth duration={500}>
            <h1  class="hover:text-emerald-700 hover:border hover:rounded-3xl hover:p-1  ">About</h1>
          </Link>
          <Link onClick={() => setIsOpen(false)} to="rooms" smooth duration={500}>
            <h1  class="hover:text-emerald-700 hover:border hover:rounded-3xl hover:p-1  ">Rooms</h1>
          </Link>
          <Link onClick={() => setIsOpen(false)} to="gallery" smooth duration={500}>
            <h1  class="hover:text-emerald-700 hover:border hover:rounded-3xl hover:p-1  ">Gallery</h1>
          </Link>
          <Link onClick={() => setIsOpen(false)} to="contact" smooth duration={500}>
            <h1  class="hover:text-emerald-700 hover:border hover:rounded-3xl hover:p-1  ">Contact</h1>
          </Link>

          {/* Book Now for Mobile */}
          <a
            href="https://api.whatsapp.com/send?phone=919007062180"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-green-900 px-6 py-2 rounded-lg mt-4 hover:text-violet-700 hover:border hover:rounded-3xl hover:p-1"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}

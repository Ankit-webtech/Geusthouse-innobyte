import { useState } from "react";
import { FaHeart, FaThumbsUp } from "react-icons/fa";

export default function RoomCard({ image, title, price, description }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [favorite, setFavorite] = useState(false);

  // Toggle like
  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1); // unlike
    } else {
      setLikes(likes + 1); // like
    }
    setLiked(!liked);
  };

  // Toggle favorite
  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  // WhatsApp link with auto message
  const whatsappLink = `https://api.whatsapp.com/send?phone=919007062180&text=Hi,%20I%20want%20to%20book%20the%20${title}%20for%20₹${price}/night.`;

  return (
    <div className="relative bg-primary text-light rounded-2xl shadow-green-600 shadow-lg overflow-hidden hover:scale-105 transition-transform">
      {/* Room Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Overlay Buttons on Image */}
      <div className="absolute top-2 right-2 flex gap-2">
        {/* Like Button */}
        <button
          onClick={handleLike}
          className={`text-sm p-2 rounded-full shadow-md ${
            liked ? "bg-blue-600 text-white" : "bg-transparent text-blue-600"
          }`}
        >
          <FaThumbsUp /> {likes}
        </button>

        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          className={`text-xl p-2 rounded-full shadow-md ${
            favorite ? "text-red-600 border-2" : "bg-transparent text-white"
          }`}
        >
          <FaHeart />
        </button>
      </div>

      {/* Room Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-lg text-green-800 font-bold">₹{price}/night</span>

          {/* WhatsApp Booking Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-primary px-4 py-2 rounded-lg hover:border-2 hover:text-green-800"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

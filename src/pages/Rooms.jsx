import RoomCard from "../components/RoomCard";

export default function Rooms() {
  const rooms = [
    {
      image: "/small.jpg",
      title: "budget Room",
      price: 1200,
      description: "Spacious room with AC, Wi-Fi, and attached bathroom.",
    },
    {
      image: "/header.jpg",
      title: "Standard Room",
      price: 800,
      description: "Comfortable stay with all basic amenities.",
    },
    {
      image: "/recep.jpg",
      title: "Family Suite",
      price: 2000,
      description: "Perfect for families, large bed and living area.",
    },
    {
      image: "/large.jpg",
      title: "Deluxe Room",
      price: 1500,
      description: "Experience luxury in our deluxe rooms with modern design.",
    },
    {
      image: "/room3.jpg",
      title: "Executive Suite",
      price: 6500,
      description: "Premium suite with elegant interiors and best amenities.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16" id="rooms">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h4 className="uppercase tracking-widest text-blue-950  font-semibold mb-2">
          Our Living Room 
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-green-900">
          The Most Memorable Rest Time Starts Here.
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover our selection of rooms crafted for your comfort and luxury. 
          Whether you're here for a short stay or a long vacation, we have 
          the perfect option waiting for you.
        </p>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            title={room.title}
            price={room.price}
            description={room.description}
          />
        ))}
      </div>
    </section>
  );
}

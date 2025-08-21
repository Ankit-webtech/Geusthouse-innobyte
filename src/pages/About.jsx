export default function About() {
  // WhatsApp booking link
  const whatsappLink = `https://api.whatsapp.com/send?phone=919007062180&text=Hi,%20I%20want%20to%20book%20a%20room%20at%20Kingsukh%20Guest%20House.`;

  return (
    <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10" id="about">
      {/* Left Image */}
      <div className="flex-1">
        <img
          src="/out.jpg"
          alt="Kingsukh Guesthouse"
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 text-left">
        <h4 className="uppercase tracking-widest text-accent font-semibold mb-2">
          About Us
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">
          The Best Holidays Start Here!
        </h2>
        <p className="font-semibold text-highlight mb-1">
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by scenic hills and dams.
          Enjoy comfort, delicious meals, and greenery — your ideal retreat for unforgettable memories.
        </p>

        <p className="font-semibold text-green-700 mb-1">
          Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
        </p>
        <p className="font-semibold text-green-700 mb-6">
          Contact us: +91 9007062180
        </p>

        {/* WhatsApp Booking Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-accent text-green-600 px-6 py-3 rounded-lg hover:bg-accent hover:bg-green-950"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}

export default function ServicesSection() {
  const services = [
    { icon: "🔒", title: "High Class Security" },
    { icon: "🛎️", title: "24 Hours Room Service" },
    { icon: "🍴", title: "Restaurant" },
    { icon: "🗺️", title: "Tourist Guide Support" },
  ];

  return (
    <section className="relative bg-cover bg-center py-16" style={{ backgroundImage: "url('/serviceBG1.jpg')" }}>
      <div className="absolute inset-0  bg-opacity-70"></div>
      
      <div className="relative container mx-auto px-6 text-center text-light">
        {/* Heading */}
        <h4 className="uppercase tracking-widest text-white font-semibold mb-2">Services</h4>
        <h2 className="text-3xl text-green-600 md:text-4xl font-bold mb-8">
          Strive Only For The Best.
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12  ">
          {services.map((service, index) => (
            <div key={index} className="bg-primary bg-opacity-90 rounded-2xl shadow-lg p-6 hover:scale-130 transition hover:shadow-green-800">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg text-white font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <div className="bg-white/90 px-8 py-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-green-700">100+</h3>
            <p className="text-gray-700">Bookings Completed</p>
          </div>
          <div className="bg-white/90 px-8 py-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-green-700">150+</h3>
            <p className="text-gray-700">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

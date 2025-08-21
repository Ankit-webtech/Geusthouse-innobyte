export default function Gallery() {
  const images = [
    "/flower.jpg",
     "/recep.jpg",
     "/out.jpg",
    "/large.jpg",
    "/small.jpg",
    "/header.jpg",
     "/small.jpg",
     "/serviceBG1.jpg",
     "/homeBG.jpg",
     "/service.jpg"

  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-green-900 mb-10">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className=" shadow-lg hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </section>
  );
}

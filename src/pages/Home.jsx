import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  return (
    <section
  className="relative bg-cover bg-center h-screen flex items-center justify-center"
  style={{ backgroundImage: "url('/homeBG2.jpg')" }}
>
  <div className="absolute inset-0  bg-opacity-70"></div>
  <div className="relative text-light max-w-2xl px-4 text-black">
    <h1 className="text-5xl font-bold">
      Make Yourself At Home In Our{" "}
      <span className="text-green-800">Guest House</span>.
    </h1>
    <p className="mt-4 text-lg text-secondary">Simple – Unique – Friendly</p>
    <ScrollLink to="rooms" smooth={true} duration={500}>
      <button className="group p-1.5 mt-4 items-baseline px-10  text-[1.25em] text-white bg-gradient-to-r from-green-600 to-gray-800 rounded-md shadow-inner transition-all duration-700 ease-out transform origin-center hover:text-green-950 hover:shadow-[inset_-2px_1px_1px_rgba(34,197,94,0.6),inset_2px_1px_1px_rgba(34,197,94,0.6),inset_0px_-2px_20px_rgb(22,163,74),0px_20px_30px_rgb(34,197,94),0px_-20px_30px_rgba(34,197,94,0.6),1px_2px_20px_rgb(22,163,74)]">
  <span className="group-hover:contrast-150">View more</span>

  {/* ::before */}
  <span className="before:absolute before:content-[''] before:h-[0.45em] before:w-[0.45em] before:rounded-[50%_0%] before:border-[8px] before:border-green-500 before:shadow-inner before:shadow-[rgba(34,197,94,0.6)] before:transition-all before:duration-1000 before:rotate-45 group-hover:before:rounded-full group-hover:before:border-white group-hover:before:scale-125"></span>

  {/* ::after */}
  <span className="after:absolute after:content-[' '] after:h-[0.2em] after:w-[0.2em] after:rounded-full after:border-2 after:border-green-900 after:transition-all after:duration-500 group-hover:after:border-green-500 group-hover:after:-rotate-[120deg] group-hover:after:translate-x-[10%] group-hover:after:translate-y-[150%]"></span>
</button>


    </ScrollLink>
  </div>
</section>

  );
}

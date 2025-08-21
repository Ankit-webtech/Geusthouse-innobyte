import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ServicesSection from "./pages/ServiceSection";

function App() {
  return (
    <div className=" text-light">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="rooms"><Rooms /></section>
      <section id="serviceSection"><ServicesSection /></section>
      <section id="gallery"><Gallery /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;

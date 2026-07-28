import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Platforms from "./components/Platforms";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Platforms />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import "./index.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Highlights from "@/components/sections/Highlights";
import Timeline from "@/components/sections/Timeline";
import Announcements from "@/components/sections/Announcements";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Highlights />
        <Timeline />
        <Announcements />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;


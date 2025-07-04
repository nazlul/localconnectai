import Hero from "@/components/Hero";
import Join from "@/components/Join";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Problem />
      <Solution />
      <WhyUs />
      <Join />
      <Contact /> 
      <Footer />
    </>
  );
}

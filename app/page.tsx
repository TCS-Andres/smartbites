import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Problem from "./components/Problem";
import Guide from "./components/Guide";
import Features from "./components/Features";
import Transformation from "./components/Transformation";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import WaitlistCTA from "./components/WaitlistCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <Problem />
        <Guide />
        <Features />
        <Transformation />
        <Testimonials />
        <FAQ />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}

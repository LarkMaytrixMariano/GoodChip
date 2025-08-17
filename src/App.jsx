import { useState } from "react";
import IntroBite from "./components/IntroBite";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCarousel from "./components/ProductCarousel";
import WhyGoodChips from "./components/WhyGoodChips";
import AboutChip from "./components/AboutChip";
import ChipRetail from "./components/ChipRetail";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <IntroBite onFinish={() => setShowIntro(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <ProductCarousel />
          <WhyGoodChips />
          <AboutChip />
          <ChipRetail />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

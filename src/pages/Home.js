import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useEffect, useRef } from "react";
import webGLFluidEnhanced from "webgl-fluid-enhanced";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import { animateScroll } from "react-scroll";
import Section5 from "../components/Section5";
import Footer from "../components/Footer";
import Section6 from "../components/Section6";
function Home() {
  const [lengthd, setlengthd] = useState(false);
  const top = () => {
    animateScroll.scrollToTop();
  };
  const canvasRef = useRef(null);
  useEffect(() => {
    if (window.visualViewport.width > 500) {
      webGLFluidEnhanced.simulation(canvasRef.current, {
        SIM_RESOLUTION: 256,
        DENSITY_DISSIPATION: 2,
        PRESSURE_ITERATIONS: 10,
        BRIGHTNESS: window.visualViewport.width > 500 ? "0.1" : "1",
        COLOR_PALETTE: ["#00000", "#61faf0"],
      });

      console.log(
        webGLFluidEnhanced.simulation(canvasRef.current),
        window.visualViewport.width > 500 ? "1" : "2"
      );
    } else {
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setlengthd(true);
      } else {
        setlengthd(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <canvas ref={canvasRef} className="w-100 p-0 m-0 vh-100 canva" />
      <div className="home bg-darka">
        <div className="row p-0 m-0">
          <div className="col-12 p-0 myz">
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />
            <i
              class={` absbutton fa-solid fa-circle-chevron-up fa-beat text-primarya ${
                !lengthd ? "animate1" : "animate2"
              }`}
              onClick={() => top()}
            ></i>
            <div className="absolute">a</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

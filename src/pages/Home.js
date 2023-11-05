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

  return (
    <>
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

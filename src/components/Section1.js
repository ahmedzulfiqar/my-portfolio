import React, { useState } from "react";
import Secover from "./Secover";
import TextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion";
import { Element, Link } from "react-scroll";
import image from "../media/me.jpg";
import Spline from "@splinetool/react-spline";

const TEXTS = ["Web ", "Front End ", "Full Stack ", "Mern Stack "];
function Section1() {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      {" "}
      <Element name="About Me">
        <Secover>
          <motion.div
            className="col-lg-7 col-12  align-self-center text-start  section sec1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className=" mb-3  btn text-light bg-primaryaaa py-2 h-25 da">
              I Am a
              <TextTransition
                springConfig={presets.gentle}
                style={{ margin: "0 4px" }}
                className="text-light fw-bolder"
                inline
              >
                {TEXTS[index % TEXTS.length]}
              </TextTransition>{" "}
              {""}Developer
            </div>{" "}
            <div className="display-1  d-md-block d-none fw-bolder  mb-3  p-0 d ">
              I Am Ahmed <span className="text-primarya m-0 p-0">Zulfiqar</span>
            </div>{" "}
            <div className="display-4 fw-bolder d-md-none d-block mb-3  p-0  ">
              I Am Ahmed <span className="text-primarya m-0 p-0">Zulfiqar</span>
            </div>{" "}
            <p className="ds mb-3 text-light text-justify fw-lighter">
              Crafting Engaging Web Experiences with React: Bridging Code and
              Creativity for Intuitive Digital Solutions.{" "}
            </p>
            {/*  <a
            class="btn btn-dark border-primarya mx-1 px-3 "
            href="#!"
            role="button"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
      
          <a
            class="btn btn-dark border-primarya mx-1 px-3 "
            href="#!"
            role="button"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            class="btn btn-dark border-primarya mx-1 px-3 "
            href="#!"
            role="button"
          >
            <i class="fab fa-stack-overflow"></i>
          </a>
          <a
            class="btn btn-dark border-primarya mx-1 px-3 "
            href="#!"
            role="button"
          >
            <i class="fab fa-github"></i>
  </a>*/}
          </motion.div>
          <motion.div
            className="col-md-5 col-12 align-self-center p-0 m-0 px-lg-3 mt-lg-0 mt-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <div className="vh- mx-auto d-xl-block d-none">
              <Spline scene="https://prod.spline.design/5q3nUvpZlKDcC4MZ/scene.splinecode" />
            </div>
            <div className="h-1000 mx-auto d-xl-none d-block ">
              <Spline scene="https://prod.spline.design/E4Z1EO0gHlNNELts/scene.splinecode"  className="mx-auto"/>
            </div>
            <>
              <div className="h6 text-primaryaa align-self-center d-md-none d-block text-center">
                Scroll Down
              </div>
              <Link
                className=" rounded-5 display-6 mt-1 text-peimarya d-md-none d-block  text-center"
                to="Skills"
                offset={-50}
              >
                <i class="fa-solid fa-arrow-down text-primarya fa-bounce"></i>
              </Link>
            </>
          </motion.div>
        </Secover>
      </Element>
    </>
  );
}

export default Section1;

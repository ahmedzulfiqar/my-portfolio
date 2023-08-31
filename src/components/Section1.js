import React, { useState } from "react";
import Secover from "./Secover";
import TextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion";
import { Element, Link } from "react-scroll";

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
            className="col-lg-7 col-12  align-self-center text-lg-start text-center section sec1"
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
            <div className="display-1 fw-bolder  mb-3  p-0 d ">
              I Am Ahmed <span className="text-primarya m-0 p-0">Zulfiqar</span>
            </div>{" "}
            <p className="ds mb-3 text-light fw-lighter">
              <span className="text-primarya fw-bolder">{"<h1>"}</span>Crafting
              Engaging Web Experiences with React: Bridging Code and Creativity
              for Intuitive Digital Solutions.{" "}
              <span className="text-primarya fw-bolder">{"</h1>"}</span>
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
            className="col-md-4 col-12 align-self-center p-0 m-0 px-lg-3 mt-lg-0 mt-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <div className="divco mx-auto d-xl-block d-none">
              <img
                src="https://scontent.fkhi11-2.fna.fbcdn.net/v/t1.15752-9/364225642_1488413658657054_4249292570584258048_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TO4ZUvHKVRsAX8kXKuJ&_nc_ht=scontent.fkhi11-2.fna&oh=03_AdSXWZC7Md4UNAtvNkgIQNHx1VrLAwieh9SstR5Nhiq6jw&oe=64F961BA"
                alt=""
                className=" align-self-center"
              />
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

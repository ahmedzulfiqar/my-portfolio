import React, { useCallback, useEffect, useState } from "react";
import logo from "../media/LOGO.png";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import { Element, Link } from "react-scroll";
function Navbar() {
  const [showlist, setshowlist] = useState(false);
  const [list, setlist] = useState([
    "About Me",
    "Skills",
    "Services",
    "Projects",
    "Testimonials",
    "Contact",
  ]);

  const [scrolled, setScrolled] = useState(false);
  const [view, setview] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position and update the state
      const scrollTop = window.scrollY;
      const scrollTop2 = window.visualViewport.width;
      if (scrollTop2 < 1000) {
        setScrolled(true);
        setview(true);
      } else {
        if (scrollTop > 200) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
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
      <motion.div
        className={`navbar w-100 fixed-top px-lg-5 px-3 navbar-expand-lg ${
          !scrolled ? " bg-transparent py-lg-3 " : "bg-darka py-lg-2"
        }`}
        initial={{ opacity: 0, y: -0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div class="container">
          <a class="navbar-brand text-primarya" href="#">
            Ahmed Zulfiqar
          </a>{" "}
          <button
            class=" navbar-toggler border-0 me-auuto bg-transparent"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <i class="fa fa-bars text-light" aria-hidden="true"></i>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end algin-self-center"
            id="navbarNav"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 opacity-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>{" "}
            </ul>
            <ul class="navbar-nav align-self-center">
              {list.map((item) => {
                return (
                  <Link
                    activeClass="active"
                    to={item}
                    spy={true}
                    hashSpy={true}
                    duration={0}
                    delay={0}
                    offset={-200}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    defaultValue={"About Me"}
                    onSetActive={(i) => console.log(i)}
                  >
                    <li
                      class={`nav-item mynavitem  h5 text-lighta fw-bolder px-2 mx-1  m-0 py-md-1 `}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>

      <div
        class="offcanvas offcanvas-end mynavbar2 bg-transparent"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
            <a class="navbar-brand text-primarya ps-1" href="#">
              Ahmed Zulfiqar{" "}
            </a>
          </h5>

          <i
            class="fa fa-times display-6 text-primaryaa"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            aria-hidden="true"
          ></i>
        </div>
        <div class="offcanvas-body px-0  mt-3">
          <img
            src="https://wallpapercave.com/wp/K0HCxt0.jpg"
            alt=""
            className="paar"
          />
          <ul class="navbar-nav justify-content-end flex-grow-1 sa">
            {list.map((item) => {
              return (
                <Link
                  activeClass="active"
                  to={item}
                  spy={true}
                  hashSpy={true}
                  duration={0}
                  delay={0}
                  offset={-100}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  defaultValue={"About Me"}
                  className=""
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  aria-hidden="true"
                  onSetActive={(i) => console.log(i)}
                >
                  <li
                    class={`text-light mynavitem fw-bolder px-3  h5 py-3  m-0`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

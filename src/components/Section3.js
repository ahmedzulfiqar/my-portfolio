import React, { useState } from "react";
import Seccover2 from "./Seccover2";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Seccover3 from "./Secover3";
import Carousel from "react-multi-carousel";
function Section3() {
  const [cardsdata, setcardsdata] = useState([
    {
      expert: "Expert",
      icon: "fas fa-code",
      title: "Web Development",
      description:
        "Crafting modern, responsive websites that captivate users and achieve your business goals. From concept to launch, I ensure a seamless online presence.",
    },
    {
      expert: "Expert",
      icon: "fas fa-paint-brush",
      title: "UI/UX Design",
      description:
        "Designing intuitive user interfaces that enhance user experiences. I create wireframes and prototypes that transform ideas into visually appealing designs.",
    },
    {
      expert: "Intermediate",
      icon: "fas fa-shopping-cart",
      title: "E-Commerce Solutions",
      description:
        "Building robust e-commerce platforms that drive sales. From product listings to secure payment gateways, I make selling online a breeze.",
    },
    {
      expert: "Expert",
      icon: "fas fa-laptop-code",
      title: "Custom Web Applications",
      description:
        "Developing tailored web applications that streamline your operations. I build scalable solutions that solve unique business challenges.",
    },
    {
      expert: "Advanced",
      icon: "fas fa-wrench",
      title: "Website Maintenance",
      description:
        "Providing ongoing support and updates to keep your website running smoothly. I ensure your online presence is always up-to-date and secure.",
    },
    {
      expert: "Advanced",
      icon: "fas fa-tachometer-alt",
      title: "Performance Optimization",
      description:
        "Optimizing website speed and performance for a better user experience. I enhance loading times and overall site responsiveness.",
    },
    {
      expert: "Intermediate",
      icon: "fas fa-chart-line",
      title: "SEO Implementation",
      description:
        "Implementing SEO strategies to improve your website's visibility on search engines. I help your site rank higher and attract more organic traffic.",
    },
    {
      expert: "Intermediate",
      icon: "fas fa-server",
      title: "Web Hosting",
      description:
        "Providing reliable web hosting solutions to keep your website online and accessible. I ensure top-notch security and performance.",
    },
  ]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Element name="Services">
      <Seccover3>
        <div className="row justify-content-center text-light section mr">
          <motion.div
            className="col-md-6 col-11   text-md-center text-start mb-lg-5 mb-4"
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: "00px" },
              hidden: { opacity: 0, y: "-20px" },
            }}
          >
            <motion.div
              className=" mb-md-3 mb-2  btn bg-primaryaaa  da text-lighta"
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              transition={{ duration: 0.3, delay: 0.6 }}
              variants={{
                visible: { opacity: 1, scale: 1, color: "#fff" },
                hidden: { opacity: 0, scale: 0.9 },
              }}
            >
              Services
            </motion.div>
            <div className="display-5 fw-bolder mb-md-3 mb2 p-0 ">
              Transforming Ideas into
              <span className="text-primarya m-0 p-0"> Websites.</span>
            </div>{" "}
          </motion.div>
          <motion.div className="col-lg-9 col-12 p-0">
            <div className="row m-0 overflow-">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1000}
                customTransition="all .5s"
                className=" swqe p-0 m-0"
                transitionDuration={500}
                arrows={false}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom"
              >
                {cardsdata.map((data) => (
                  <motion.div
                    className="my-lg-3 px-3 mx-0 py-2  my-2 brrrr"
                    viewport={{ once: true }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.5 }}
                    variants={{
                      visible: { opacity: 1, translateY: "0px" },
                      hidden: {
                        opacity: 0,
                        translateY: "-20px",
                      },
                    }}
                  >
                    <div class="card text-center  bg-darka py-2 px-3 shadow shadow-strong mcard">
                      <div class="card-header display-1  text-primarya">
                        <i class={data.icon}></i>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title h4 t">{data.title}</h5>
                        <p class="card-text text-muted">{data.description}</p>
                      </div>
                      <div class="card-footer text-primaryaa">
                        {data.expert}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Carousel>
            </div>
          </motion.div>{" "}
        </div>
      </Seccover3>
    </Element>
  );
}

export default Section3;

import { Element } from "react-scroll";
import Seccover2 from "./Seccover2";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import image1 from "../media/screencapture-jinnahcoaching-netlify-app-2023-08-22-20_35_19.png";
import image2 from "../media/1.png";
import image3 from "../media/qwwde.png";
import image4 from "../media/3.png";
import Tabs from "@mui/material/Tabs";
import twoimage from "../media/2.png";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const data = [
  {
    image: image4,
    glink: "https://github.com/ahmedzulfiqar/webdevify",
    dlink: "https://ahmedzulfiqar.github.io/webdevify",
    title: "Webdevify",
    name: "A Facebook Clone",
    technology:
      "Html , Css , Bootstrap , Javascript , React , Node js , Express js , Mongo Db , Framer Motion , Cors , Other Liabraries For Diffrent Components",
    para: "Webdevify is an impressive Facebook clone project that combines an array of technologies, including HTML, CSS, Bootstrap, JavaScript, React, Node.js, Express.js, MongoDB, Framer Motion, and various other libraries for different components. You can explore the project through this GitHub link or visit the live demo here. This project serves as a showcase of my web development skills and the ability to recreate a dynamic and interactive social platform, reminiscent of Facebook, using the MERN stack.",
  },
  {
    image: image3,
    glink: "https://github.com/ahmedzulfiqar/restraunt-website",
    dlink: "https://ahmedzulfiqar.github.io/restraunt-website",
    title: "Toasters Restraunt",
    name: "A Restraunt Website",
    technology:
      "Html , Css , Bootstrap, Javascript , React , Framer Motion , React Carousel",
    para: "I've crafted a delectable restaurant website to demonstrate my skills. This site features an array of mouthwatering menus, a seamless reservation system, a captivating photo gallery, and contact information for inquiries. It's designed with responsive elements to ensure a delightful experience on any device. If you're looking for a web developer to create an engaging online presence for your restaurant, I'm here to turn your vision into a digital reality.",
  },
  {
    image: image1,
    glink: "#",
    dlink: "https://jinnahcoaching.netlify.app",
    title: "Jinnah Coaching",
    name: "A Educational  Website",
    technology: "Html , Css , Bootstrap, Javascript , React , Framer Motion",
    para: "Jinnah Coaching Website In my portfolio, I'm thrilled to showcase the Jinnah Coaching website – a static site I designed and built using HTML, CSS, and React.Responsive Design: The site adapts beautifully to different devices.Intuitive Navigation: Users can easily explore the institution's courses, faculty, and mission.Modern Aesthetics: The website boasts an attractive design with pleasing visuals and typography.Smooth Performance: It's optimized for fast loading and smooth transitions, thanks to React.This project demonstrates my web development skills, offering a glimpse into my commitment to creating engaging and functional websites. If you're interested in collaborating on your next project, don't hesitate to reach out.",
  },
  {
    image: image2,
    glink: "https://github.com/ahmedzulfiqar/my-portfolio",
    dlink: "https://ahmedzulfiqar.github.io/my-portfolio",
    title: "Ahmed Portfolio",
    name: "A Portfolio Website",
    technology:
      "Html , Css , Bootstrap, Javascript , React , Framer Motion , Node Mailer",
    para: "Welcome to my portfolio website, a concise representation of my web development prowess, enhanced with the magic of Framer Motion for smooth animations and Node.js and Express for robust back-end functionality. This site mirrors my passion for crafting responsive, visually appealing web solutions. With an intuitive menu for easy navigation, it showcases select projects that highlight my creativity and technical expertise. If you're seeking a web developer to turn your digital vision into reality, I'm just a message away.",
  },

  {
    image: twoimage,
    glink: "https://github.com/ahmedzulfiqar/evolving-Ai",
    dlink: "https://ahmedzulfiqar.github.io/evolving-AI",
    title: "Evolving AI",
    name: "Landing Page",
    technology:
      "Html , Css , Bootstrap , Javascript , React , Other Npm Liabraries",
    para: " I've created an engaging landing page to illustrate my skills. This landing page boasts captivating visuals, a compelling call to action, and seamless responsiveness across devices. It's designed to pique your curiosity and encourage interaction. If you're looking for a web developer to craft an effective online presence that captures attention and drives engagement, I'm here to turn your vision into a digital reality.",
  },
];
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Section4() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Element name="Projects">
      <Seccover2>
        <div className="row justify-content-center text-light section mr m-0">
          <motion.div
            className="col-md-7 col-11 p-0   text-md-center text-start mb-lg-5 mb-3 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: "00px" },
              hidden: { opacity: 0, y: "-20px" },
            }}
          >
            <motion.div
              className=" mb-md-3 mb-2  btn bg-primaryaaa  da text-lighta"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              variants={{
                visible: { opacity: 1, scale: 1, color: "#fff" },
                hidden: { opacity: 0, scale: 0.9 },
              }}
            >
              Projects
            </motion.div>
            <div className="display-4 fw-bolder mb-md-3 mb-2 p-0 ">
              A Look at My
              <span className="text-primarya m-0 p-0"> Projects. </span>
            </div>{" "}
            <p className="h6 text-lighta  fw-lighta px-lg-5">
              Embarking on a Dynamic Journey of Web Development: Showcasing a
              Diverse Array of Projects That Define My Passion, Expertise, and
              Commitment to Crafting Engaging Online Experiences
            </p>
          </motion.div>
          <div class=" py-lg-2 py-2 col-lg-10 col-12">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 32, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  textColor="#000"
                  variant="scrollable"
                  indicatorColor="#fff"
                  centered
                >
                  {data.map((dat, index) => {
                    return (
                      <Tab
                        label={dat.name}
                        className={`text-primarya rounded-3  mx-md-2 mx-1 ${
                          value == index ? "bg-primaryaaa" : ""
                        }  `}
                        {...a11yProps(0)}
                      />
                    );
                  })}
                </Tabs>
              </Box>

              {data.map((dats, index) => {
                return (
                  <div
                    role="tabpanel"
                    hidden={value !== index}
                    id={`simple-tabpanel-${index}`}
                    aria-labelledby={`simple-tab-${index}`}
                  >
                    {value === index && (
                      <>
                        <div className="row m-0 mt-4 justify-content-">
                          <div className="col-md-4 col-12 px-md-2 p-0">
                            <div class="card bg-darka border-0 rounded- overflow-hidden">
                              <div className="card-cont">
                                <img
                                  src={dats.image}
                                  class="card-img-top"
                                  alt="..."
                                />
                              </div>
                          
                            </div>
                          </div>
                          <div className="col-md-8 col-12 ps-md-4 pe-md-5 mt-md-2 mt-4 ps-0 pe-0">
                            <div className="d-block">
                              <div className="h1 text-primarya">
                                {dats.name}
                              </div>
                              <p className="fw-lighta text-light">
                                {dats.para}
                              </p>
                              <div className="card-heading mb-2 fw-light mt-0 pt-0 fs-5 text-light">
                                <div className="fw-bold text-primarya">
                                  {" "}
                                  Technologies Used{" "}
                                </div>
                                {dats.technology}
                              </div>
                              <a
                                className="btn btn-sm bg-darka mt-3 border-primarya text-light"
                                href={dats.glink}
                              >
                                <i class="fa-brands text-light fa-github pe-2"></i>
                                Visit Github
                              </a>
                              <a
                                className="btn  btn-sm ms-md-2 ms-1 bg-darka mt-3 border-primarya text-light"
                                href={dats.dlink}
                              >
                                <i class="fa-solid  text-light fa-link pe-2"></i>
                                View Live Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </Box>
          </div>
        </div>
      </Seccover2>
    </Element>
  );
}

export default Section4;

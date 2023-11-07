import { Element } from "react-scroll";
import Seccover2 from "./Seccover2";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../media/screencapture-jinnahcoaching-netlify-app-2023-08-22-20_35_19.png";
import image2 from "../media/screencapture-localhost-3000-2023-08-22-20_57_29.png";
import image3 from "../media/qwwde.png";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
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
    image: image1,
    link: "",
    name: "A Educational  Website",
    technology: "Html , Css , Bootstrap, Javascript , React",
  },
  {
    image: image2,
    link: "",
    name: "A Portfolio Website",
    technology: "Html , Css , Bootstrap, Javascript , React",
  },
  {
    image: image3,
    link: "",
    name: "A Restraunt  Website",
    technology: "Html , Css , Bootstrap, Javascript , React",
  },
  {
    image: "",
    link: "",
    name: "A Bakery Website",
    technology: "Html , Css , Bootstrap, Javascript , React",
  },
  {
    image: "",
    link: "",
    name: "A Facebook CLone",
    technology:
      "Html , Css , Bootstrap , Javascript , React , Node js , Express js , Mongo Db",
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
            className="col-md-7 col-11   text-center mb-lg-5 mb-4 "
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
              className=" mb-3  btn bg-primaryaaa  da text-lighta"
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
            <div className="display-2 fw-bolder mb-3 p-0 ">
              A Look at My
              <span className="text-primarya m-0 p-0"> Projects. </span>
            </div>{" "}
            <p className="h5 text-lighta px-lg-5">
              Embarking on a Dynamic Journey of Web Development: Showcasing a
              Diverse Array of Projects That Define My Passion, Expertise, and
              Commitment to Crafting Engaging Online Experiences
            </p>
          </motion.div>
          <div class=" py-lg-5 py-2 col-lg-10 col-12">
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
                        className={`text-primarya rounded-3  mx-2 ${
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
                    hidden={value !== 0}
                    id={`simple-tabpanel-${0}`}
                    aria-labelledby={`simple-tab-${0}`}
                  >
                    {value === index && (
                      <div className="px-sm-3">
                        <div class="card bg-darka border-0 ">
                          <div className="card-cont">
                            <img
                              src={dats.image}
                              class="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div class="card-body">
                            <p class="card-heading fw-bolder fs-2 p-0 m-0">
                              {dats.name}
                            </p>
                            <div className="card-heading fw-bolder mt-0 pt-0 fs-5 text-primarya">
                              {dats.technology}
                            </div>
                          </div>
                        </div>
                      </div>
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

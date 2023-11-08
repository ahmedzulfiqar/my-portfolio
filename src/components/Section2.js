import React, { useState } from "react";
import Seccover2 from "./Seccover2";
import { motion } from "framer-motion";
import Progress from "./Progress";
import { Element } from "react-scroll";
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
function Section2() {
  const [progresslist, setprogresslist] = useState([
    { progress: "99%", name: "Html" },
    { progress: "80%", name: "React" },
    { progress: "95%", name: "Css" },
    { progress: "50%", name: "MongoDB" },
    { progress: "95%", name: "Bootstrap" },
    { progress: "50%", name: "Express" },
    { progress: "90%", name: "Javascript" },
    { progress: "55%", name: "Node" },
  ]);

  return (
    <Element name="Skills">
      <Seccover2>
        <div
          className="row justify-content-center text-light section mr "
          id="About Me"
        >
          <motion.div
            className="col-md-6 col-11   text-md-center text-start mb-lg-3 mb-2"
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
              PROFESSIONAL SKILL
            </motion.div>
            <div className="display-5 fw-bolder mb-md-3 mb-2 p-0 ">
              My Coding
              <span className="text-primarya m-0 p-0"> Proficiency.</span>
            </div>{" "}
            <p className="h5 text-lighta fw-lighta">
              Navigating the Diverse Tech Stack: A Comprehensive Gauge of My
              Proficiency in Various Programming Languages
            </p>
          </motion.div>

          <div className="col-lg-9 col-12 p-0">
            <div class="row m-0 justify-content-center">
              <div className="col-lg-10 col-12 p-0 ">
                <div class="card mb-0 px-lg-4 px-0 mb-md-0 bg-transparent py-md-3 py-0">
                  <div class="card-body">
                    <div className="row m-0">
                      {progresslist &&
                        progresslist.map((data) => {
                          return <Progress data={data} />;
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Seccover2>
    </Element>
  );
}

export default Section2;

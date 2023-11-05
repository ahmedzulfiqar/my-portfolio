import React from "react";
import Seccover2 from "./Seccover2";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material";
import me from "../media/me.jpg";
const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: "#8755f2",
          },

          "&:after": {
            borderBottomColor: "#8755f2",
          },
          "&:hover:before": {
            borderBottomColor: "#8755f2", // Border color on hover
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#fff",
          "&.Mui-focused": {
            color: "#8755f2",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#fff", // Change input text color
        },
      },
    },
  },
});
function Section6() {
  return (
    <Element name="Contact" className="m-0 p-0">
      <Seccover2>
        <div className="row justify-content-center text-light section mr m-0 p-0">
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
              CONTACT ME
            </motion.div>
            <div className="display-2 fw-bolder mb-3 p-0 ">
              Get In Touch
              <span className="text-primarya m-0 p-0"> With Me ?</span>
            </div>{" "}
          </motion.div>
          <div class="col-12 col-lg-9 p-0">
            <div class="card bg-darka border-0  text-light myeoq  px-2 py-md-5 py-2 m-0 rounded-3">
              <div class="row ">
                <div class="col-md-6 col-lg-4 d-none d-md-block ">
                  <img src={me} alt="login form" className="imgheight rounded-2" />
                </div>
                <div class="col-md-6 col-lg-7  p-0 m-0">
                  <div class="card-body px-lg-5 py-lg-2">
                    <form className="text-light ">
                      <div class="d-flex mb-3 pb-1 display-5">
                        Contact&nbsp;
                        <span className="text-primarya"> Me</span>
                      </div>
                      <div className="align-items-center text-light w-100 py-lg-3  py-1">
                        <ThemeProvider theme={theme}>
                          <TextField
                            label="Name"
                            className="w-100 "
                            type="name"
                            variant="standard"
                          />
                        </ThemeProvider>
                      </div>{" "}
                      <div className="align-items-center text-light w-100 py-lg-3  py-2">
                        <ThemeProvider theme={theme}>
                          <TextField
                            label="Email"
                            className="w-100 "
                            variant="standard"
                          />
                        </ThemeProvider>
                      </div>{" "}
                      <div className="align-items-center text-light w-100 py-lg-3 py-2">
                        <ThemeProvider theme={theme}>
                          <TextField
                            label="Message"
                            multiline
                            className="w-100 "
                            maxRows={4}
                            variant="standard"
                          />
                        </ThemeProvider>
                      </div>
                      <div className="align-items-end text-light w-100 py-lg-4 py-4">
                        <div className="  btn bg-primaryaaa text-lighta ">
                          Send Email
                        </div>
                      </div>
                    </form>
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

export default Section6;

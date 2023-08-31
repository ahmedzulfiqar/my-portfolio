import { Element } from "react-scroll";
import Seccover2 from "./Seccover2";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../media/screencapture-jinnahcoaching-netlify-app-2023-08-22-20_35_19.png";
import image2 from "../media/screencapture-localhost-3000-2023-08-22-20_57_29.png";
import Seccover3 from "./Secover3";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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
    name: "A Bakery Website",
    technology: "Html , Css , Bootstrap, Javascript , React",
  },
  {
    image: image1,
    link: "",
    name: "A Educational  Website",
    technology: "Html , Css , Bootstrap, Javascript , React",
  },
  {
    image: image2,
    link: "",
    name: "A Bakery Website",
    technology: "Html , Css , Bootstrap, Javascript , React",
  },
  {
    image: image1,
    link: "",
    name: "A Educational  Website",
    technology: "Html , Css , Bootstrap, Javascript , React",
  },
  {
    image: image2,
    link: "",
    name: "A Bakery Website",
    technology: "Html , Css , Bootstrap, Javascript , React",
  },
];
function Section5() {
  return (
    <Element name="Testimonials">
      <Seccover3>
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
              TESTIMONIAL
            </motion.div>
            <div className="display-2 fw-bolder mb-3 p-0 ">
              Reviews From My
              <span className="text-primarya m-0 p-0"> Clients. </span>
            </div>{" "}
          </motion.div>
          <div class=" py-lg-5 py-2 col-lg-10 col-12">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              infinite={true}
              autoPlaySpeed={1000}
              customTransition="all .5s"
              className="mx-lg-5 swqe"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
            >
              {data.map((datas) => {
                return (
                  <div className="px-sm-5">
                    <div class="card bg-transparent border-0 px-md-5">
                      <div class="card-body bg-darka  dsw ms-2">
                        <div class="row m-0 p-0">
                          <div class="col-lg-3 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                            <img
                              src="https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/343036116_1154410215951451_5008089031489977725_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEJzStrW_77AI6cYp63j8EORbKSdVLCSXtFspJ1UsJJe8WC_UZsDThZmOp3VtWTvqU-c7ldS2bRawvSAkJdHFYT&_nc_ohc=wwrE-UMXGl8AX_Fj5an&_nc_ht=scontent.fkhi11-2.fna&oh=00_AfBWgXFYfuXr4XtFWcvKQyJ-ilFbcRXF1UuRl7PDJd8dKQ&oe=64EF3730"
                              class="rounded-1   shadow-1 w-100"
                            />
                          </div>
                          <div class="col-lg-8">
                            <p class="fw-bold lead mb-1 display-4">
                              <strong>Waleed Zulfiqar</strong>
                            </p>
                            <p class="fw-bold text-primarya mb-2 h4">
                              Account Trader
                            </p>{" "}
                            <p class="text-muted fw-light ">
                              I had the absolute pleasure of exploring the
                              remarkable web development portfolio created by
                              Ahmed, and I am left thoroughly
                              impressed. As someone who values sleek design,
                              flawless functionality, and an intuitive user
                              experience, I can confidently say that this
                              portfolio ticked all the right boxes.
                            </p>
                            <ul class="list-unstyled d-flex justify-content-start mb-0">
                              <li>
                                <i class="fas fa-star fa-sm text-warning"></i>
                              </li>
                              <li>
                                <i class="fas fa-star fa-sm text-warning ps-1"></i>
                              </li>
                              <li>
                                <i class="fas fa-star fa-sm text-warning ps-1"></i>
                              </li>
                              <li>
                                <i class="fas fa-star fa-sm text-warning ps-1"></i>
                              </li>
                              <li>
                                <i class="fas fa-star fa-sm text-warning ps-1"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </Seccover3>
    </Element>
  );
}

export default Section5;

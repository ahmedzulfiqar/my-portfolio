import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";
function Progress({ data }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    let iyear = parseInt(data.progress, 10);
    const animation = animate(count, iyear, { duration: 1 });

    return animation.stop;
  }, []);
  return (
    <div className="col-md-6 col-12 my-lg-3 my-2 pe-md-4">
      <div className="prodiv p-0 m-0">
        <div className="row m-0 p-0">
          <p class="mb-2 h5 text-lighta col-6 text-start">{data.name}</p>
          <motion.div className="col-5 text-end">{rounded}</motion.div>
          <div className="col-1 p-0 m-0">%</div>
          <div class="progress col-12 p-0" role="progressbar">
            <motion.div
              class="progress-bar  progress-bar-animated bg-primaryaaaa"
              initial={{
                opacity: 0,
                width: 0,
              }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  width: data.progress,
                },
                hidden: {
                  opacity: 0,
                  width: data.progress / 2,
                },
              }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;

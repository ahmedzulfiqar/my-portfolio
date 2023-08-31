import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import options2 from "./Options";
function Secover({ children }) {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div class="card card1 text-lighta bg-transparent ">
      {/*   <Particles
        id="tsparticless"
        className="par bg-dangers"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options2}
  />*/}
      <div class="card-img-overlay  d-flex text-center p-0 m-0  pt- sec1">
        <div className="row justify-content-center w-100 m-0 ">
          <div className="align-self-center  col-lg-9 col-12 px-0">
            <div className="container  ">
              <div className="row justify-content-between w-100 m-0 mt-lg-0 mt-0 pt-lg-0 sec1">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secover;

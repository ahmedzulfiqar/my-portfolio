import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import options from "./Engine";
function Particlecomp() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      className="par"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
}

export default Particlecomp;

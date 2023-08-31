const options = {
  fullScreen: false,
  background: {
    color: {
      value: "#0a0b1c",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      push: {
        quantity: 10,
      },
      repulse: {
        distance: 80,
        duration: 1,
      },
      bubble: {
        distance: 150,
        size: 30,
        duration: 3,
        opacity: 0.5,
        speed: 1,
      },
    },
  },
  particles: {
    color: {
      value: ["#66fcf1", "#fffff"],
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0,
      width: 1,
    },
    move: {
      direction: "right",
      enable: "true",
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 60,
    },
    opacity: {
      value: 0.8,
    },
    shape: {
      type: "circle",
    },
  },
};

export default options;

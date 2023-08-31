const options2 = {
  fullScreen: false,
  background: {
    color: {
      value: "#000",
    },
  },
  fpsLimit: 60,
  interactivity: {},
  particles: {
    color: {
      value: "#383aa8",
    },
    links: {
      color: "#383aa8",
      distance: 50,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "random",
      enable: "false",
      outModes: {},
      random: true,
      speed: 0.6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 2000,
      },
      value: 620,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },

  detectRetina: true,
};

export default options2;

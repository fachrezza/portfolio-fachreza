import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: "#050505",
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 1000,
            },
          },

          color: {
            value: "#ff003c",
          },

          links: {
            enable: true,
            color: "#ff003c",
            distance: 150,
            opacity: 0.15,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: { min: 1, max: 4 },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },

            resize: true,
          },

          modes: {
            grab: {
              distance: 180,

              links: {
                opacity: 0.6,
              },
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;

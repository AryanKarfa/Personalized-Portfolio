import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: {
          enable: false, // CRITICAL
        },
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#00ffff",
          },
          links: {
            enable: true,
            color: "#00ffff",
            distance: 150,
            opacity: 0.2,
          },
          move: {
            enable: true,
            speed: 1,
          },
          shape: {
            type: "circle",
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
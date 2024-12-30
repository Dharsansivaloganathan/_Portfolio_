import NavBar from "@/components/NavBar";
import ParticlesComponent from "@/components/Particles";
import ProfileBody from "@/components/ProfileBody";
import { useMemo } from "react";

export default function Home() {
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#FCF6F4",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#333333",
        },
        links: {
          color: "#231F20",
          distance: 190,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  return (
    <div className="w-[100dvw] h-[100dvh] relative overflow-hidden">
      <NavBar homePage />
      <ProfileBody />
      <ParticlesComponent id="tsparticles" particlesOption={options}/>
    </div>
  );
}

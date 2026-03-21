import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

function FloatingTags() {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadAll(engine);
        }).then(() => setInit(true));
      }, []);

      const [init, setInit] = useState(false);
    if (!init) return null;

  return (
    <Particles
      id="skills-bg"
      init={init}
      className="absolute inset-0 w-full h-full pointer-events-none"
      options={{
        fullScreen: { enable: false },   // stays inside parent, not fullscreen
        particles: {
          number: { value: 30 },
          move: {
            enable: true,
            speed: 0.6,
            direction: "top",
            straight: false,
          },
          opacity: { value: { min: 0.05, max: 0.15 } },
          size: { value: 0 },           // no dot, just text
          shape: {
            type: "char",
            options: {
              char: {
                value: ["<div>", "</div>", "<p>", "const", "=>", "useEffect", ".map()", "async", "await", "<span>"],
                font: "DM Sans",
                style: "",
                weight: "500",
              },
            },
          },
          color: { value: "#0d9488" },
        },
        background: { color: "transparent" },
      }}
    />
  );
}

export default FloatingTags
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

function FloatingTags() {
  const [init, setInit] = useState(false);  // ← moved above useEffect

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="portfolio-bg"
      // ← removed init={init}, not valid in v3
      options={{
        fullScreen: { enable: true, zIndex: -1 },  // ← covers entire page
        particles: {
          number: { value: 40 },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            straight: false,
          },
          opacity: { value: { min: 0.3, max: 0.6 } },  // ← much higher
          size: { value: 10 },                             // ← text needs a size
          shape: {
            type: "char",
            options: {
              char: {
                value: [
                  "<div>", "<coffee/>", "</>", "</p>", "<span>", "</span>",
                  "<h1>", "</h1>", "<ul>", "<li>", "const", "=>",
                  "useEffect", ".map()", "async", "await", "<import/>",
                  "<Redux>", "</section>", "<dev/>", "{...}", "<TS/>",
                ],
                font: "monospace",
                style: "",
                weight: "400",
                fill: true,                                // ← needed to render text
              },
            },
          },
          color: { value: "#abb1ba" },
        },
        background: { color: "" },
      }}
    />
  );
}

export default FloatingTags;
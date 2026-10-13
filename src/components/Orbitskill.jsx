import { useEffect, useState } from "react";

import {
  FaReact,
  FaLaravel,
  FaWordpress,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-sky-400 text-xl" />,
  },
  {
    name: "Laravel",
    icon: <FaLaravel className="text-red-400 text-xl" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400 text-xl" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-xl" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-cyan-400 text-xl" />,
  },
  {
    name: "WordPress",
    icon: <FaWordpress className="text-blue-500 text-xl" />,
  },
];

const OrbitSkill = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[450px] h-[450px] mx-auto">

      {/* Core Glow */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2

        w-52
        h-52

        rounded-full

        bg-red-500/10

        blur-3xl

        animate-pulse
        "
      />

      {/* Center Core */}

      <div
        className="
        absolute
        left-1/2
        top-1/2

        -translate-x-1/2
        -translate-y-1/2

        w-32
        h-32

        rounded-full

        bg-black/60
        backdrop-blur-xl

        border
        border-red-500

        flex
        flex-col
        items-center
        justify-center

        shadow-[0_0_40px_rgba(255,0,60,0.5)]

        z-20
        "
      >
        <span
          className="
          text-red-400

          font-bold
          text-xl

          tracking-wider
          "
        >
          ANDI
        </span>

        <span className="text-xs text-gray-400">
          Full Stack Developer
        </span>
      </div>

      {/* Ring 1 */}

      <div
        className="
        absolute
        left-1/2
        top-1/2

        -translate-x-1/2
        -translate-y-1/2

        w-[320px]
        h-[320px]

        rounded-full

        border
        border-red-500/20
        "
      />

      {/* Ring 2 */}

      <div
        className="
        absolute
        left-1/2
        top-1/2

        -translate-x-1/2
        -translate-y-1/2

        w-[400px]
        h-[400px]

        rounded-full

        border
        border-red-500/10
        "
      />

      {/* Skills */}

      {skills.map((skill, index) => {
        const angle =
          (index / skills.length) * (Math.PI * 2) +
          rotation * 0.02;

        const radius = 160;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div
            key={skill.name}
            className="
            absolute

            px-4
            py-2

            rounded-full

            bg-black/40
            backdrop-blur-xl

            border
            border-red-500/20

            hover:border-red-500/60

            flex
            items-center
            gap-2

            text-sm

            transition-all
            duration-300

            hover:scale-110

            shadow-[0_0_15px_rgba(255,0,60,0.15)]
            hover:shadow-[0_0_30px_rgba(255,0,60,0.4)]

            z-10
            "
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
            }}
          >
            {skill.icon}

            <span className="text-gray-200">
              {skill.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default OrbitSkill;

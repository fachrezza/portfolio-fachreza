import { useEffect, useState } from "react";

const LoadingScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }

        return prev + 4;
      });
    }, 100);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div
        className="
        fixed
        inset-0

        bg-[#050505]

        flex
        items-center
        justify-center

        overflow-hidden

        z-[999]
        "
      >
        {/* Background Glow */}

        <div
          className="
          absolute

          w-[600px]
          h-[600px]

          bg-red-500/20

          rounded-full

          blur-[180px]
          "
        />

        {/* Grid */}

        <div
          className="
          absolute
          inset-0

          opacity-20
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,0,60,.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,0,60,.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative text-center z-10">

          {/* Logo */}

          <h1
            className="
            text-6xl
            md:text-8xl

            font-black

            text-red-500

            animate-pulse

            drop-shadow-[0_0_30px_rgba(255,0,60,0.8)]
            "
          >
            AF
          </h1>

          {/* Title */}

          <h2
            className="
            mt-6

            text-2xl
            md:text-3xl

            font-bold

            text-white
            "
          >
            INITIALIZING SYSTEM
          </h2>

          {/* Subtitle */}

          <p
            className="
            mt-3

            text-gray-400

            tracking-widest
            uppercase
            "
          >
            Loading Digital Universe...
          </p>

          {/* Progress Bar */}

          <div
            className="
            w-72
            md:w-96

            h-3

            bg-white/10

            rounded-full

            overflow-hidden

            mt-8
            "
          >
            <div
              className="
              h-full

              bg-[#ff003c]

              shadow-[0_0_20px_rgba(255,0,60,0.8)]

              transition-all
              duration-200
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {/* Percentage */}

          <p
            className="
            mt-4

            text-red-400

            font-semibold
            "
          >
            {progress}%
          </p>

          {/* Fake Terminal */}

          <div
            className="
            mt-10

            text-left

            bg-black/40
            backdrop-blur-md

            border
            border-red-500/20

            rounded-xl

            p-4

            w-[320px]
            md:w-[450px]

            text-sm

            text-red-300
            "
          >
            <p>{">"} Booting Portfolio OS...</p>
            <p>{">"} Loading Components...</p>
            <p>{">"} Connecting Experience Database...</p>
            <p>{">"} Initializing React Engine...</p>
            <p>{">"} Ready.</p>
          </div>

        </div>
      </div>
    );
  }

  return children;
};

export default LoadingScreen;

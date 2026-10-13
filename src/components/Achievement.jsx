import CountUp from "react-countup";
import {
  FaProjectDiagram,
  FaLaptopCode,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";

const Achievement = () => {
  const achievements = [
    {
      icon: <FaProjectDiagram />,
      value: 15,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      icon: <FaLaptopCode />,
      value: 4,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: <FaHandshake />,
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
    },
    {
      icon: <FaRocket />,
      value: 10,
      suffix: "+",
      label: "Technologies",
    },
  ];

  return (
    <section className="py-32 px-5">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <span
            className="
            text-red-500
            uppercase
            tracking-[4px]
            text-sm
            "
          >
            Achievements
          </span>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-black
            mt-4
            "
          >
            Numbers That
            <span className="text-red-500">
              {" "}Matter
            </span>
          </h2>

        </div>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >

          {achievements.map((item, index) => (
            <div
              key={index}
              className="
              group

              bg-white/5
              backdrop-blur-xl

              border
              border-red-500/20

              rounded-3xl

              p-8

              text-center

              transition-all
              duration-500

              hover:border-red-500

              hover:scale-105

              hover:shadow-[0_0_40px_rgba(255,0,60,0.35)]
              "
            >

              <div
                className="
                w-16
                h-16

                mx-auto
                mb-6

                rounded-2xl

                bg-red-500/10

                flex
                items-center
                justify-center

                text-red-500
                text-2xl
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                text-5xl
                font-black
                text-red-500
                "
              >
                <CountUp
                  end={item.value}
                  duration={3}
                />
                {item.suffix}
              </h3>

              <p
                className="
                text-gray-400
                mt-3
                "
              >
                {item.label}
              </p>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Achievement;
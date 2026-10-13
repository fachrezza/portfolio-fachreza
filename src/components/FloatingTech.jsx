const techs = [
  "React",
  "Laravel",
  "PostgreSQL",
  "Tailwind",
  "JavaScript",
  "WordPress",
];

const FloatingTech = () => {
  return (
    <>
      {techs.map((tech, index) => (
        <div
          key={index}
          className="
          absolute

          bg-white/5
          backdrop-blur-lg

          border
          border-red-500/20

          px-5
          py-3

          rounded-full

          text-red-300
          font-medium

          shadow-[0_0_20px_rgba(255,0,60,0.2)]

          hover:border-red-500/60
          hover:shadow-[0_0_30px_rgba(255,0,60,0.5)]
          hover:scale-105

          transition-all
          duration-300

          animate-pulse
          "
          style={{
            top: `${20 + index * 10}%`,
            left: `${10 + index * 12}%`,
          }}
        >
          {tech}
        </div>
      ))}
    </>
  );
};

export default FloatingTech;
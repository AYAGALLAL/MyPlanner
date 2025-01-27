import React from "react";

const Skills = () => {
  const skills = ["JavaScript", "React", "Next.js", "Docker", "TailwindCSS", "GitHub Actions"];

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-primary shadow-md rounded-lg p-4 min-w-[150px] text-center"
            >
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

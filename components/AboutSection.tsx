import React from "react";

const skills = [
    { skill: "C++" },
    { skill: "C#" },
    { skill: "Python" },
    { skill: "JavaScript" },
    { skill: "Next.js" },
    { skill: "Node.js" },
    { skill: "React" },
    { skill: "Tailwind CSS" },
  ];

const AboutSection = () => {
  return (
    <div id="about-section" className="p-40 pb-20">
    <section>
        <div>
          <h1 className="my-10 text-center font-bold text-4xl">About Me</h1>
        </div>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left w-full md:w-auto">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Learn More About Me!</h1>
            <p className="text-xl">
              My name is Eric and I am Software Engineer based in the Grand Canyon state 🌵 (Tucson, AZ).
            </p>
            <br />
            <p className="text-xl">
              I have 4 years of experience in software development (full-time and internships).Graduated from 
              <a 
                href="https://www.gmu.edu/" className="font-bold cursor-pointer"> George Mason University
              </a> in 2023 with a BS in Computer Science. 
            </p>
            <br />
            <p className="text-xl">
              For fun, I enjoy traveling and learning new languages. I believe that challenging myself with hobbies such as these provide me with new experiences and always being a student of the world! 🌎
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item) => {
                return (
                  <p className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">{item.skill}</p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default AboutSection
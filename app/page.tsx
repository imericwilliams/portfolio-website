import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Portfolio",
    description: "Software Engineer Portfolio for Eric Williams.",
    image: "/portfolio-github.png",
    github: "https://github.com/imericwilliams/portfolio-website",
    link: "https://github.com/imericwilliams/portfolio-website",
  },
  {
    name: "Map My Escape",
    description: "An app to keep users informed about environmental risks in their local area, with a focus on fast and efficient communication.",
    image: "/map-my-escape.png",
    github: "https://github.com/imericwilliams/map-my-escape",
    link: "https://kazitasin07.wixsite.com/mapmyescape",
  },
];

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

export default function Home() {
  return (
    <main className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      {/* #FIXME: Create a component of the Intro section */}
      <section id="home-section">
        <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left space-x-10">
          <Link
            href={"https://www.linkedin.com/in/imericwilliams/"}>
            <Image 
              src="/headshot-suit.jpg"
              width={325}
              height={325}
              className="rounded-full shadow-2xl hover:-translate-y-3 transition-transform cursor-pointer"
              alt=""
          />
          </Link>
          <div className="md:mt-2 md:w-3/5">
            <h1 className="mb-8 font-bold text-4xl">Hi, I&#39;m Eric!</h1>
            <p><b>Software Engineer</b> based in Tucson, AZ. Working towards creating software that enhances user experience.</p>
          </div>
        </div>
      </section>
        
      {/* #FIXME: Create a component of the About section */}
      {/* #FIXME: When you click About, it jumps past where the text, 'About Me' */}
      <section id="about-section">
        <div>
          <h1 className="my-10 text-center font-bold text-4xl">About Me</h1>
        </div>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Learn More About Me!</h1>
            <p>
              My name is Eric and I am Software Engineer based in the Grand Canyon state 🌵 (Tucson, AZ).
            </p>
            <br />
            <p>
              I have 4 years of experience in software development (full-time and internships).Graduated from 
              <a 
                href="https://www.gmu.edu/" className="font-bold cursor-pointer"> George Mason University
              </a> in 2023 with a BS in Computer Science. 
            </p>
            <br />
            <p>
              For fun, I like to travel and learn new languages. I believe that challenging myself with hobbies such as these provide me with new experiences and always being a student of the world! 🌎
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

      {/* #FIXME: Create a component of the Projects section */}
      <section id="projects-section">
        <div>
          <h1 className="my-10 text-center font-bold text-4xl">Projects</h1>
          <div className="flex flex-col space-y-28">
            {projects.map((project) => {
              return (
                <div className="flex flex-col md:flex-row md:space-x-10">
                  <div className=" md:w-1/2">
                    <Link 
                      href={project.link}>
                        <Image 
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-2xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4">{project.description}</p>
                    <div className="flex flex-row md:align-bottom space-x-4">
                    <Link 
                      href={project.github} target="_blank">
                        <BsGithub 
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"/>
                    </Link>
                    <Link 
                      href={project.link} target="_blank">
                        <BsArrowUpRightSquare 
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"/>
                    </Link>
                  </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      </main>
  );
}

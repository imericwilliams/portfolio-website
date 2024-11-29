import React from "react";
import Link from "next/link";
import Image from "next/image";
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

const ProjectsSection = () => {
  return (
    <section id="projects-section" className="p-40 pb-20">
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
  )
}

export default ProjectsSection;
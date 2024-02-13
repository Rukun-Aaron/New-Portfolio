"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectTag from "../sub/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    src: "/bugs(1).png",
    title: "Web App for Pest Detection",
    description: `This project was created for Landcare Research to help expidite the detection of invasive pests in NZ.
     It uses a Machine Learning model to classify insects in an image and then displays the results.`,
    tag: ["All", "Web"],
    previewUrl: "https://codecritters.live/",
    gitUrl: "https://github.com/uoa-compsci399-s2-2023/capstone-project-team-34-code-critters"
  },
  
  {
    id: 2,
    src: "/web(1).png",
    title: "Space Themed Website",
    description: "This is my portfolio website, created using Next.js and Tailwind CSS. It showcases my projects and skills.",
    tag: ["All", "Web"],
    previewUrl: "https://www.rukun.dev/",
    gitUrl: "https://github.com/Rukun-Aaron/New-Portfolio"
  },
  {
    id: 3,
    src: "/dogs.png",
    title: "Web App to Help Aspiring Dog owners",
    description: "This web application uses AI to help people find the perfect dog breed for them. It allows users to directly compares and filter 60+ dog breeds based on their preferences.",
    tag: ["All", "Web"],
    previewUrl: "https://www.rukun.me/",
    gitUrl: "https://github.com/Rukun-Aaron/Dog_breeds"
  },
  {
    id: 3,
    src: "/flaggio.png",
    title: "Flaggle: A flag guessing game",
    description: "This is a WORDLE inspired game where you have to guess the flag of a country. It allows users to guess the displayed flag and gives them feedback on their guess like how fair off they are.",
    tag: ["All", "Web"],
    previewUrl: "https://flagio.vercel.app/",
    gitUrl: "https://github.com/Rukun-Aaron/flagio"
  },

]

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div
      className="flex flex-col items-center justify-center z-[20] pt-[3rem]"
      id="projects"
    >
      <h1 className="text-center py-8 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
        My Projects
      </h1>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="flex  flex-col">
        <div ref={ref} className="h-full w-full grid grid-cols-1 sm:grid-cols-2   xl:grid-cols-3 2xl:grid-cols-3md:flex-row gap-10 px-10">
          {/* <ul ref={ref} className="grid md:grid-cols-3 gap-8 px-10 md:gap-12"> */}

          {filteredProjects.map((project: any, index: any) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                src={project.src}
                title={project.title}
                description={project.description}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
               />
            </motion.div>
          ))}
          {/* </ul> */}
          {/* < ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
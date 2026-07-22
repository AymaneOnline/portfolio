import { useState } from "react";
import { projects } from "../data/projects.js";
import { skillIcons } from "../data/skillIcons.js";
import { ExternalLink, Github, Eye } from "lucide-react";
import GetWaitlyWidget from "../components/GetWaitlyWidget.jsx";

const Projects = () => {
  const [showWidget, setShowWidget] = useState(false);

  return (
    <article className="w-full relative" id="projects">
      <h2 className="flex items-center gap-5 text-2xl mt-16 mb-6 after:content-[''] after:flex-1 after:h-px after:bg-primary-dark/20 dark:after:bg-white/20">
        Projects
      </h2>

      <ul className="grid grid-cols-1 gap-6 mt-5 max-w-full h-auto">
        {projects.map((project, index) => (
          <li
            key={index}
            className="project-item flex flex-col md:flex-row gap-4"
          >
            {/* Left: Image */}
            <div className="md:w-1/3">
              <div className="aspect-[3/2] overflow-hidden rounded-[10px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="md:w-2/3 flex flex-col justify-between">
              {/* Top: Title + Buttons */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-bold dark:text-white max-sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="dark:text-gray-300">{project.description}</p>
                  {project.title === "GetWaitly" && (
                    <button
                      onClick={() => setShowWidget(!showWidget)}
                      className="mt-3 flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-500 text-sm"
                    >
                      <Eye size={16} />
                      {showWidget ? "Hide Widget" : "Widget"}
                    </button>
                  )}
                </div>

                <div className="flex flex-col gap-2 flex-shrink-0">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-accent text-white rounded-md hover:bg-accent/80 text-sm"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}

                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#eeeeee] dark:bg-[#565656] dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-[#464646] text-sm"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Widget */}
              {project.title === "GetWaitly" && showWidget && <GetWaitlyWidget />}

              {/* Tech stack */}
              <div className="skills mt-3" aria-label="Technologies used">
                <ul className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-1.5 bg-[#eeeeee] dark:bg-[#565656] dark:text-white px-2 py-1.5 rounded-md"
                    >
                      {skillIcons[tech] && (
                        <img
                          src={skillIcons[tech]}
                          alt={tech}
                          className="w-5 h-5 object-contain"
                        />
                      )}
                      <span className="text-sm">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Projects;

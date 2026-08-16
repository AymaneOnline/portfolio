import { useState } from "react";
import { projects } from "../data/projects.js";
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
            className="project-item flex items-center justify-between gap-4"
          >
            {/* Left: Logo + Name */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 overflow-hidden rounded-[10px] shrink-0">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3">
                <h3 className="font-bold dark:text-white max-sm:text-lg">
                  {project.title}
                </h3>
                {project.title === "GetWaitly" && (
                  <button
                    onClick={() => setShowWidget(true)}
                    className="flex items-center gap-1 px-2 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-500 text-xs"
                  >
                    <Eye size={14} />
                    Widget
                  </button>
                )}
              </div>
            </div>

            {/* Right: Buttons */}
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
          </li>
        ))}
      </ul>

      {showWidget && <GetWaitlyWidget onClose={() => setShowWidget(false)} />}
    </article>
  );
};

export default Projects;
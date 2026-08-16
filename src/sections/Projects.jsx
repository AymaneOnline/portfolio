import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "../data/projects.js";
import { handleLinkClick } from "../utils/navigate.js";

const Projects = () => {
  return (
    <article className="w-full relative" id="projects">
      <h2 className="flex items-center gap-5 text-2xl mt-16 mb-6 after:content-[''] after:flex-1 after:h-px after:bg-primary-dark/20 dark:after:bg-white/20">
        Projects
      </h2>

      <ul className="grid grid-cols-1 gap-6 mt-5 max-w-full h-auto">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="project-item flex justify-between gap-4"
          >
            {/* Left: Logo + Name (clickable -> detail page) */}
            <a
              href={`/projects/${project.slug}`}
              onClick={(e) => handleLinkClick(e, `/projects/${project.slug}`)}
              className="flex items-start gap-4 group min-w-0"
            >
              <div className="w-16 h-16 overflow-hidden rounded-[10px] shrink-0">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5 pt-1 min-w-0">
                <h3 className="font-bold dark:text-white max-sm:text-lg group-hover:underline">
                  {project.title}
                </h3>
                <span className="flex items-center gap-1 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  View details
                  <ArrowRight size={14} />
                </span>
              </div>
            </a>

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
    </article>
  );
};

export default Projects;
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects.js";
import { handleLinkClick } from "../utils/navigate.js";
import Reveal from "../components/Reveal.jsx";

const Projects = () => {
  return (
    <article className="w-full relative" id="projects">
      <h2 className="flex items-center gap-5 text-2xl mt-16 mb-6 after:content-[''] after:flex-1 after:h-px after:bg-primary-dark/20 dark:after:bg-white/20">
        Projects
      </h2>

      <ul className="grid grid-cols-1 gap-5 mt-5 max-w-full h-auto">
        {projects.map((project, index) => (
          <li key={project.slug} className="project-item list-none">
            <Reveal delay={index * 80}>
              <a
                href={`/projects/${project.slug}`}
                onClick={(e) => handleLinkClick(e, `/projects/${project.slug}`)}
                className="flex items-center justify-between gap-4 p-4 rounded-lg border border-black/5 dark:border-white/10 bg-[#f6f6f7] dark:bg-white/[0.04] hover:bg-[#eeeeef] dark:hover:bg-white/[0.08] hover:border-accent/40 group transition-colors"
              >
                <div className="flex items-start gap-4 min-w-0">
                  <div className="w-16 h-16 rounded-lg border border-black/5 dark:border-white/10 bg-[#f6f6f7] dark:bg-white/[0.04] flex items-center justify-center p-1.5 shrink-0">
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col pt-1 min-w-0">
                    <h3 className="font-bold dark:text-white max-sm:text-lg group-hover:underline">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={20}
                  className="shrink-0 text-accent/70 group-hover:text-accent group-hover:translate-x-1 transition-all"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Projects;
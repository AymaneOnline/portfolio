import { useEffect } from "react";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { handleLinkClick } from "../utils/navigate.js";

const ProjectDetail = ({ project }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [project]);

  if (!project) {
    return (
      <article className="w-full">
        <a href="/" onClick={(e) => handleLinkClick(e, "/")}>
          <ArrowLeft size={16} className="inline-block mr-1" />
          Back to projects
        </a>
        <h2 className="flex items-center gap-5 text-2xl mt-16 mb-6 after:content-[''] after:flex-1 after:h-px after:bg-primary-dark/20 dark:after:bg-white/20">
          Project not found
        </h2>
        <p className="dark:text-gray-300">
          The project you're looking for doesn't exist.
        </p>
      </article>
    );
  }

  return (
    <article className="w-full relative">
      <a
        href="/"
        onClick={(e) => handleLinkClick(e, "/")}
        className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
      >
        <ArrowLeft size={16} />
        Back to projects
      </a>

      <header className="mt-8 flex items-center gap-4">
        <div className="w-16 h-16 overflow-hidden rounded-[10px] shrink-0">
          <img
            src={project.logo}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold dark:text-white">
            {project.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {project.tagline}
          </p>
        </div>
      </header>

      <p className="mt-8 text-gray-600 dark:text-gray-300 leading-relaxed">
        {project.overview}
      </p>

      <h3 className="flex items-center gap-5 text-xl mt-10 mb-4 after:content-[''] after:flex-1 after:h-px after:bg-primary-dark/20 dark:after:bg-white/20">
        Features
      </h3>
      <ul className="flex flex-col gap-3">
        {project.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
          >
            <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <h3 className="flex items-center gap-5 text-xl mt-10 mb-4 after:content-[''] after:flex-1 after:h-px after:bg-primary-dark/20 dark:after:bg-white/20">
        Built With
      </h3>
      <ul className="flex flex-wrap gap-3">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="bg-[#eeeeee] dark:bg-[#565656] dark:text-white px-3 py-1.5 rounded-md text-sm"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/80 text-sm"
          >
            View Demo
            <ExternalLink size={16} />
          </a>
        )}

        {project.source && (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-[#eeeeee] dark:bg-[#565656] dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-[#464646] text-sm"
          >
            <Github size={16} />
            Source Code
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectDetail;
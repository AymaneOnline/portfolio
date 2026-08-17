import { useEffect } from "react";
import { ExternalLink, Github, ArrowLeft, ArrowRight } from "lucide-react";
import { handleLinkClick } from "../utils/navigate.js";
import { projects } from "../data/projects.js";

const SectionHeading = ({ children }) => (
  <h3 className="flex items-center gap-5 text-xl mt-12 mb-4 after:content-[''] after:flex-1 after:h-px after:bg-primary-dark/20 dark:after:bg-white/20">
    {children}
  </h3>
);

const MetaChip = ({ label, value }) => (
  <span className="px-3 py-1.5 rounded-md bg-[#eeeeee] dark:bg-[#565656] dark:text-white text-sm">
    <span className="text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wide mr-1.5">
      {label}
    </span>
    {value}
  </span>
);

const ProjectDetail = ({ project }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [project]);

  if (!project) {
    return (
      <article className="w-full">
        <a href="/" onClick={(e) => handleLinkClick(e, "/")}>
          <ArrowLeft size={16} className="inline-block mr-1" />
          Back to home
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

  const projectIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="w-full relative">
      <a
        href="/"
        onClick={(e) => handleLinkClick(e, "/")}
        className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
      >
        <ArrowLeft size={16} />
        Back to home
      </a>

      <header className="mt-8">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-lg border border-black/5 dark:border-white/10 bg-[#f6f6f7] dark:bg-white/[0.04] flex items-center justify-center p-2 shrink-0">
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold dark:text-white">
              {project.title}
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400">
              {project.tagline}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {project.role && <MetaChip label="Role" value={project.role} />}
            {project.year && <MetaChip label="Year" value={project.year} />}
            {project.status && (
              <MetaChip label="Status" value={project.status} />
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/80 text-sm font-medium"
              >
                View live demo
                <ExternalLink size={16} />
              </a>
            )}

            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#eeeeee] dark:bg-[#565656] dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-[#464646] text-sm font-medium"
              >
                <Github size={16} />
                Source code
              </a>
            )}
          </div>
        </div>
      </header>

      {project.screenshot && (
        <figure className="mt-8 rounded-xl overflow-hidden border border-black/5 dark:border-white/10">
          <img
            src={project.screenshot}
            alt={project.screenshotAlt || `${project.title} screenshot`}
            loading="lazy"
            className="w-full h-auto"
          />
        </figure>
      )}

      <p className="mt-10 max-w-[65ch] text-gray-600 dark:text-gray-300 leading-relaxed">
        {project.overview}
      </p>

      {project.problem && (
        <>
          <SectionHeading>Problem</SectionHeading>
          <p className="max-w-[65ch] text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.problem}
          </p>
        </>
      )}

      <SectionHeading>What it does</SectionHeading>
      <ul className="flex flex-col gap-3 max-w-[65ch]">
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

      {project.result && (
        <>
          <SectionHeading>Results</SectionHeading>
          <div className="rounded-lg border-l-4 border-accent bg-black/[0.03] dark:bg-white/[0.05] p-5">
            <p className="max-w-[65ch] text-gray-700 dark:text-gray-200 leading-relaxed">
              {project.result}
            </p>
          </div>
        </>
      )}

      <SectionHeading>Built with</SectionHeading>
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

      <div className="mt-12 flex flex-wrap gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-md hover:bg-accent/80 text-sm font-medium"
          >
            View live demo
            <ExternalLink size={16} />
          </a>
        )}

        {project.source && (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#eeeeee] dark:bg-[#565656] dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-[#464646] text-sm font-medium"
          >
            <Github size={16} />
            Source code
          </a>
        )}
      </div>

      {nextProject && (
        <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/10">
          <a
            href={`/projects/${nextProject.slug}`}
            onClick={(e) =>
              handleLinkClick(e, `/projects/${nextProject.slug}`)
            }
            className="group flex items-center justify-between gap-4"
          >
            <div>
              <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Next project
              </span>
              <div className="flex items-center gap-3 mt-1.5">
                <div className="w-10 h-10 rounded-md border border-black/5 dark:border-white/10 bg-[#f6f6f7] dark:bg-white/[0.04] flex items-center justify-center p-1 shrink-0">
                  <img
                    src={nextProject.logo}
                    alt={`${nextProject.title} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold dark:text-white text-lg group-hover:underline">
                  {nextProject.title}
                </h3>
              </div>
            </div>
            <ArrowRight
              size={20}
              className="text-accent/70 group-hover:text-accent transition-colors"
              aria-hidden="true"
            />
          </a>
        </div>
      )}
    </article>
  );
};

export default ProjectDetail;
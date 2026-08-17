import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { handleLinkClick } from "../utils/navigate.js";
import WaitlyWidgetEmbed from "../components/WaitlyWidgetEmbed.jsx";

const SectionHeading = ({ children }) => (
  <h3 className="flex items-center gap-5 text-xl mt-12 mb-4 after:content-[''] after:flex-1 after:h-px after:bg-primary-dark/20 dark:after:bg-white/20">
    {children}
  </h3>
);

const renderDemo = (demo) => {
  switch (demo.type) {
    case "full-widget":
      return <WaitlyWidgetEmbed waitlistId={demo.waitlistId} />;
    case "mini-widget":
      return (
        <WaitlyWidgetEmbed
          waitlistId={demo.waitlistId}
          widgetType="mini"
        />
      );
    case "widget":
      return <WaitlyWidgetEmbed waitlistId={demo.waitlistId} />;
    default:
      return null;
  }
};

const ProjectDemo = ({ project }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [project]);

  if (!project || !project.demos?.length) {
    return (
      <article className="w-full">
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, "/")}
          className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
        >
          <ArrowLeft size={16} />
          Back to home
        </a>
        <h2 className="flex items-center gap-5 text-2xl mt-16 mb-6 after:content-[''] after:flex-1 after:h-px after:bg-primary-dark/20 dark:after:bg-white/20">
          Demo not available
        </h2>
        <p className="dark:text-gray-300">
          No demo is available for this project yet.
        </p>
      </article>
    );
  }

  return (
    <article className="w-full relative">
      <a
        href={`/projects/${project.slug}`}
        onClick={(e) =>
          handleLinkClick(e, `/projects/${project.slug}`)
        }
        className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
      >
        <ArrowLeft size={16} />
        Back to project
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
              Interactive demo
            </p>
          </div>
        </div>
      </header>

      {project.demos.map((demo, index) => (
        <section key={demo.id} className={index > 0 ? "mt-12" : ""}>
          <SectionHeading>{demo.title}</SectionHeading>
          {demo.description && (
            <p className="max-w-[65ch] text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {demo.description}
            </p>
          )}
          {renderDemo(demo)}
        </section>
      ))}
    </article>
  );
};

export default ProjectDemo;
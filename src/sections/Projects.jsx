import { projects } from '../data/projects.js'
import { skillIcons } from '../data/skillIcons.js'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  return (
    <article className="w-full relative" id="projects">
      <h2 className="flex items-center gap-5 text-2xl mt-16 mb-6 after:content-[''] after:flex-1 after:h-px after:bg-primary-dark/20 dark:after:bg-white/20">
        Projects
      </h2>

      <ul className="grid grid-cols-1 gap-6 mt-5 max-w-full h-auto">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <div className="overflow-hidden rounded-[10px]  flex justify-center items-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="mt-2 font-bold dark:text-white max-sm:text-lg">{project.title}</h3>
            <p className="dark:text-gray-300">{project.description}</p>

            <div className="skills mt-2" aria-label="Technologies used">
              <ul className="flex justify-start items-center flex-wrap gap-3">
                {project.tech.map(tech => (
                  <li key={tech} className="flex items-center gap-1.5 bg-[#eeeeee] dark:bg-[#565656] dark:text-white px-2 py-1.5 rounded-md">
                    {skillIcons[tech] && (
                      <img src={skillIcons[tech]} alt={tech} className="w-5 h-5 object-contain" />
                    )}
                    <span className="text-sm">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 mt-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-accent text-white rounded-md hover:bg-accent/80 text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
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
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Projects

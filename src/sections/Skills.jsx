import { skills } from '../data/skills.js'

const Skills = () => {
  return (
    <article className="w-full" id="skills">
      <h2 className="flex items-center gap-5 text-2xl mt-16 mb-6 after:content-[''] after:flex-1 after:h-px after:bg-primary-dark/20 dark:after:bg-white/20">
        Skills
      </h2>
      <ul className="w-full flex justify-center items-center flex-wrap gap-8 md:justify-between" aria-label="Programming Skills">
        {skills.map(skill => (
          <li key={skill.name} className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-sm font-medium dark:text-white">{skill.name}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Skills

import AymaneArabicSvg from '../components/AymaneArabicSvg.jsx'
import { Github, Linkedin } from 'lucide-react'

const Hero = () => {
  return (
    <article className='w-full flex justify-between items-center gap-5 text-center md:text-start max-md:flex-col-reverse my-[50px]'>
      <div className="flex flex-col justify-center items-center md:items-start gap-4 max-w-lg">
        <h1 className="text-4xl font-extralight normal-case text-primary-dark dark:text-white  ">
          Hello, I'm <span className="font-bold text-accent">Aymane</span>.
          <br />I'm a Frontend Web Developer.
        </h1>
        <div className="flex gap-6 mt-4 justify-center md:justify-start">
          <a
            href="https://github.com/AymaneOnline"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#eeeeee] dark:bg-[#565656] hover:bg-accent hover:text-white dark:hover:bg-accent text-sm"
            aria-label="GitHub"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aymane-elboudadi-833a6b252/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#eeeeee] dark:bg-[#565656] hover:bg-accent hover:text-white dark:hover:bg-accent text-sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="w-48 h-48 rounded-full bg-white border border-black flex justify-center items-center p-6 dark:bg-primary-dark dark:border-white">
        <AymaneArabicSvg />
      </div>
    </article>
  )
}

export default Hero

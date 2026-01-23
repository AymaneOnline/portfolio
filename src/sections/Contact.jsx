import { Mail } from 'lucide-react'

const Contact = () => {
  return (
    <article className="w-full mt-2.5" id="contact">
      <h2 className="flex items-center gap-5 text-2xl mt-16 mb-6 after:content-[''] after:flex-1 after:h-px after:bg-primary-dark/20 dark:after:bg-white/20">
        Contact
      </h2>
      <a
        href="mailto:contact@aymaneonline.dev"
        className="flex items-center gap-3 text-lg hover:text-accent dark:hover:text-accent"
      >
        <Mail size={24} />
        <span>contact@aymaneonline.dev</span>
      </a>
    </article>
  )
}

export default Contact

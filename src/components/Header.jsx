import { useDarkMode } from '../context/DarkModeContext.jsx'
import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

const Header = () => {
  const { isDark, toggleDarkMode } = useDarkMode()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 w-full backdrop-blur-lg z-50">
      <nav className="w-full max-w-[768px] mx-auto border-b border-primary-dark/20 dark:border-white/20 px-6 py-4 grid grid-cols-[auto_1fr_auto] items-center">
        <a
          href="#"
          className="text-[18px] hover:text-black hover:underline dark:hover:text-white"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <p className="flex items-center">
            aymaneonline
            <span className="relative ml-2 flex h-3 w-3">
              {/* Ping animation */}
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
              {/* Solid dot */}
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
            </span>
          </p>
        </a>

        <ul className="gap-6 hidden md:flex justify-center">
          <li>
            <a
              href="#skills"
              className="hover:underline dark:hover:text-white cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('skills')
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:underline dark:hover:text-white cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:underline dark:hover:text-white cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className={`md:hidden absolute px-6 w-full h-[100svh] top-0 bg-primary-light border-b border-primary-dark/20 py-4 transition-transform duration-300 dark:bg-primary-dark dark:border-white/20 right-0 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button
            onClick={toggleMenu}
            className='md:hidden ms-auto block'>
            <X />
          </button>

          <ul className="mt-24 text-[20px] flex flex-col justify-center items-center divide-y divide-primary-dark/20 dark:divide-white/20">
            <li className="py-4 w-full text-center">
              <a
                href="#skills"
                className="hover:underline dark:hover:text-white cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('skills')
                }}
              >
                Skills
              </a>
            </li>
            <li className="py-4 w-full text-center">
              <a
                href="#projects"
                className="hover:underline dark:hover:text-white cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('projects')
                }}
              >
                Projects
              </a>
            </li>
            <li className="py-4 w-full text-center">
              <a
                href="#contact"
                className="hover:underline dark:hover:text-white cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className='flex gap-4 justify-end items-center'>
          <button
            onClick={toggleDarkMode}
            className="flex justify-center items-center bg-transparent w-7 h-7 cursor-pointer border-none hover:text-black dark:hover:text-white"
            aria-label="Toggle dark mode">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={toggleMenu}
            className='md:hidden flex justify-center items-center'>
            <Menu />
          </button>
        </div>
      </nav>
    </header >
  )
}

export default Header

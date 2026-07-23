import { useDarkMode } from '../context/DarkModeContext'
import { Sun, Moon } from 'lucide-react'

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Built for speed. Every interaction is optimized to deliver instant feedback and a seamless experience.',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Clean, modern aesthetics that put your content front and center. Designed to delight every user.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description: 'Enterprise-grade security built in from day one. Your data is always protected and private.',
  },
]

const LandingPage = () => {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-primary-dark dark:to-[#1a1a1a] transition-colors">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-primary-dark/70 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <span className="text-lg font-bold text-primary-dark dark:text-white tracking-tight">
            Product
          </span>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center px-6 pt-28 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6 border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Launching Soon
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark dark:text-white leading-[1.1] tracking-tight mb-5">
            Something exciting is coming soon.
          </h1>

          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
            Join the waitlist to be the first to know when we launch.
          </p>

          <form id="waitlist-form" className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-primary-dark dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-primary-dark dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 active:scale-[0.98] text-white font-semibold transition-all shadow-sm hover:shadow-md"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section>

      <section className="px-6 py-20 bg-gray-50/80 dark:bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary-dark dark:text-white mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-12 max-w-md mx-auto">
            We're building something amazing. Here's a sneak peek at what's coming.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-accent/20 transition-all"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-primary-dark dark:text-white mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Product. All rights reserved.
          </span>
          <div className="flex gap-6 text-sm text-gray-400 dark:text-gray-500">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

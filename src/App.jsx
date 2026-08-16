import { useEffect, useState } from 'react'
import { DarkModeProvider } from './context/DarkModeContext.jsx'
import Layout from './components/Layout.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Hero from './sections/Hero.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import { projects } from './data/projects.js'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const match = pathname.match(/^\/projects\/([^/]+)\/?$/)
  const project = match
    ? projects.find((p) => p.slug === decodeURIComponent(match[1]))
    : null

  return (
    <DarkModeProvider>
      {match ? (
        <Layout>
          <ProjectDetail project={project} />
        </Layout>
      ) : (
        <Layout>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
      )}
    </DarkModeProvider>
  )
}

export default App
import { useEffect, useState } from 'react'
import { DarkModeProvider } from './context/DarkModeContext.jsx'
import Layout from './components/Layout.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import ProjectDemo from './pages/ProjectDemo.jsx'
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

  const findProject = (slug) =>
    projects.find((p) => p.slug === decodeURIComponent(slug))

  const demoMatch = pathname.match(/^\/projects\/([^/]+)\/demo\/?$/)
  const detailMatch = pathname.match(/^\/projects\/([^/]+)\/?$/)
  const demoProject = demoMatch ? findProject(demoMatch[1]) : null
  const detailProject = detailMatch ? findProject(detailMatch[1]) : null

  let page = null
  if (demoMatch) {
    page = <ProjectDemo project={demoProject} />
  } else if (detailMatch) {
    page = <ProjectDetail project={detailProject} />
  }

  return (
    <DarkModeProvider>
      <Layout>
        {page ?? (
          <>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
          </>
        )}
      </Layout>
    </DarkModeProvider>
  )
}

export default App
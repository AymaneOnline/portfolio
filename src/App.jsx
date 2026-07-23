import { DarkModeProvider } from './context/DarkModeContext.jsx'
import Layout from './components/Layout.jsx'
import Hero from './sections/Hero.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import LandingPage from './sections/LandingPage.jsx'

function App() {
  const isLandingPage = window.location.pathname === '/landing-page'

  if (isLandingPage) {
    return (
      <DarkModeProvider>
        <LandingPage />
      </DarkModeProvider>
    )
  }

  return (
    <DarkModeProvider>
      <Layout>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </DarkModeProvider>
  )
}

export default App

import { DarkModeProvider } from './context/DarkModeContext.jsx'
import Layout from './components/Layout.jsx'
import Hero from './sections/Hero.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'

function App() {
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

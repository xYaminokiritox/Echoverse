import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <About />
          <Features />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
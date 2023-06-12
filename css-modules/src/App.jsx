import './styles/palettes.css'
import './App.css'

import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar className="background-secondary" />

      <main>
        <h1>Main</h1>
      </main>

      <Footer />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './MainComp'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Revamping: TekNews</h1>
      <nav>
        <ul>
          <li>
            <a href="#">About(Non-Existent)</a>
          </li>
          <li>
            <a href="#">Our Process(Non-Existent)</a>
          </li>
          <li>
            <a href="#">Contact Us(Non-Existent)</a>
          </li>
        </ul>
      </nav>
 
    <section className="splash">
      <h2>Your place for tech news!</h2>
    </section>
   <Main />
    <Footer />
      
  
    </>
  )
}

export default App

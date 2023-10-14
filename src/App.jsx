import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <div className='section--card'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  )
}

export default App
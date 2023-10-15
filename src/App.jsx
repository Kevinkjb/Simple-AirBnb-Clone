import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import './App.css'
import cardImg from './assets/katie-zaferes.png'


function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <div className='section--card'>
        <Card 
          img={cardImg}
          rating={5.0}
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        <Card 
          img={cardImg}
          rating={5.0}
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        <Card 
          img={cardImg}
          rating={5.0}
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        <Card 
          img={cardImg}
          rating={5.0}
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        <Card 
          img={cardImg}
          rating={5.0}
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
      </div>
    </>
  )
}

export default App

import photoGrid from '../assets/photo-grid.png'

function Hero(){
  return(
    <>
      <div className='hero'>
        <img className='hero--img' src={photoGrid} alt="airbnb logo"/>
      </div>
      <div className='hero--details'>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by
          one-of-a-kind hosts--all without leaving 
          home.
        </p>
      </div>
      
    </>
    

  )
}

export default Hero
import cardImg from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

function Card(){
  return(
    <section>
        <img className='card--img' src={cardImg}/>
        <div className='rating'>
          <img className='star' src={star}/>
          <p>5.0</p>
          <span>(6)</span>
          <ul className='list'>
            <li>USA</li>
          </ul>
        </div>
        <div className='card--details'>
          <p>Life lessons with Katie Zaferes</p>
          <div className='price'>
            <span><strong>From $136</strong> / person</span>
          </div>
        </div>
    </section>
  )
}

export default Card
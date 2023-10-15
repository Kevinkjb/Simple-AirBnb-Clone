
import star from '../assets/star.png'

function Card(Props){
  return(
    <section>
        <img className='card--img' src={Props.img}/>
        <div className='rating'>
          <img className='star' src={star}/>
          <p>{Props.rating}</p>
          <span>({Props.reviewCount}) • </span>
          <span>{Props.country}</span>
        </div>
        <div className='card--details'>
          <p>{Props.title}</p>
          <div className='price'>
            <span><strong>From ${Props.price}</strong> / person</span>
          </div>
        </div>
    </section>
  )
}

export default Card
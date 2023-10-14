import logo from '../assets/Airbnb.png'


function Header(){
  return(
    <>
      <nav>
        <img className='logo--img' src={logo}/>
      </nav>
    </>

  )
}

export default Header
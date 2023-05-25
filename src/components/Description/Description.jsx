import './Description.css'

import logo from '../../assets/images/logo.jpg'

export const Description = () => {
  return (
    <div className='img-logo'>
      <img srcSet={logo} alt="logo" className='img-logo-item'/>
    </div>
    
  )
}
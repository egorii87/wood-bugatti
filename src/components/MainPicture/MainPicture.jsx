import picture from '../../assets/images/main-picture.jpg';
import './MainPicture.css'

export const MainPicture = () => {
  return (
    <div className="main-picture">
      <img srcSet={picture} alt="wood" className='img-item'/>
    </div>
  )
}
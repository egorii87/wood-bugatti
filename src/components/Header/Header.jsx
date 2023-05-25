import logo from '../../assets/images/logo-ch-small.jpg';
import './Header.css'

export const Header = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li><a href="" className='header-item'>Главная</a></li>
          <li><a href="" className='header-item'>Магазин</a></li>
          <li><img src={logo} alt="logo" className='logo'/></li>
          <li><a href="#wood-map" className='header-item'>О компании</a></li>
          <li><a href="#contacts" className='header-item'>Контакты</a></li>
        </ul>
      </nav>
    </div>
  )
}
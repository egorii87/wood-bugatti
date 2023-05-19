import logo from '../../assets/images/logo-ch-small.jpg';
import './Header.css'

export const Header = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li><a href="">Lorem</a></li>
          <li><a href="">Lorem</a></li>
          <li><img src={logo} alt="logo" className='logo'/></li>
          <li><a href="">Lorem</a></li>
          <li><a href="">Lorem</a></li>
        </ul>
      </nav>
    </div>
  )
}
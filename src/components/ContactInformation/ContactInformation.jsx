import './ContactInformation.css'
import phone from '../../assets/images/phone_icon.svg'
import location from '../../assets/images/location_icon.svg'
import compas from '../../assets/images/compas_icon.svg'

export const ContactInformation = () => {
  return (
    <div className="footer-сontact-information">
      <div className="contact-item">
        <img src={phone} alt="phone-icon" />
        <h3>Контакты</h3>
        <span>+375 29 111 11 11 <br/> oaknrock@mail.ru</span>
      </div>
      <div className="contact-item">
        <img src={location} alt="location-icon" />
        <h3>Адрес</h3>
        <span>Минск, улица Я. Мавра 25</span>
      </div>
      <div className="contact-item">
        <img src={compas} alt="compas-icon" />
        <h3>Расположение</h3>
        <span>Мы находимся в северной-западной части города. Ближайшее метро - Каменная горка.</span>
      </div>
    </div>
  )
}
import { ContactInformation } from '../ContactInformation/ContactInformation'
import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header"><h1>Контакты и расположение</h1></div>
      <ContactInformation />
    </div>
  )
}
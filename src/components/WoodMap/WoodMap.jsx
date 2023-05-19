import Tooltip from '../Tooltip/Tooltip';

import picture from '../../assets/images/bg-table1.jpg';
import li from "../../assets/images/li-item.png";
import './WoodMap.css'

export const WoodMap = () => {

  return (
    <div className='wood-map'>

    <div className="ani"><img src={li} alt="li" className='li-item first-li'/></div>

    <div className='wood-map-img'><img srcSet={picture} alt="wood" /></div>
      
    </div>
  )
}
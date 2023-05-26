import picture from '../../assets/images/bg-table-removebg-preview.png';
import './WoodMap.css'

export const WoodMap = () => {

  return (
    <div className='wood-map' id='wood-map'>
      <div className="dropdown first-drop">
          
        <button className="pulse-button">
          <span className="pulse-button__icon"></span>
          <span className="pulse-button__rings"></span>
          <span className="pulse-button__rings"></span>
          <span className="pulse-button__rings"></span>
        </button>
   
        <div className="dropdown-content">
          <div className="angle right-angle">
              <div className="ray right-ray"></div>
              <div className="ray right-ray"></div>
          </div>
          <div className="dropdown-list right-drop">
            <h3>Столешницы</h3>
            <a href="#">Кухонные</a>
            <a href="#">Кофейные</a>
            <a href="#">Обеденные</a>
            <a href="#">Компьютерные</a>
            <a href="#">В переговорную</a>
          </div>
        </div>
   
      </div>

      <div className="dropdown second-drop">
        <button className="pulse-button">
          <span className="pulse-button__icon"></span>
          <span className="pulse-button__rings"></span>
          <span className="pulse-button__rings"></span>
          <span className="pulse-button__rings"></span>
        </button>
   
        <div className="dropdown-content">
          <div className="angle left-angle">
              <div className="ray left-ray"></div>
              <div className="ray left-ray"></div>
          </div>
          <div className="dropdown-list left-drop">
            <h3>Подстолья</h3>
            <a href="#">Металлические</a>
            <a href="#">Деревянные</a>
          </div>  
        </div>
   
      </div>

      <div className="dropdown third-drop">
        <button className="pulse-button">
          <span className="pulse-button__icon"></span>
          <span className="pulse-button__rings"></span>
          <span className="pulse-button__rings"></span>
          <span className="pulse-button__rings"></span>
        </button>
   
        <div className="dropdown-content">
          <div className="angle right-angle">
              <div className="ray right-ray"></div>
              <div className="ray right-ray"></div>
          </div>
          <div className="dropdown-list right-drop">
            <h3>Мебельный щит</h3>
            <a href="#">Срощ</a>
            <a href="#">Цельнолам</a>
          </div>
        </div>
   
      </div>

      <div className="dropdown fourth-drop">
        <button className="pulse-button">
          <span className="pulse-button__icon"></span>
          <span className="pulse-button__rings"></span>
          <span className="pulse-button__rings"></span>
          <span className="pulse-button__rings"></span>
        </button>
   
        <div className="dropdown-content">
          <div className="angle left-angle">
              <div className="ray left-ray"></div>
              <div className="ray left-ray"></div>
          </div>
          <div className="dropdown-list left-drop">
            <h3>Кухонная утварь</h3>
            <a href="#">Кухонные доски</a>
            <a href="#">Подставки под стейк</a>
            <a href="#">Подставки под суши</a>
            <a href="#">Подставка под чашки</a>
            <a href="#">Подсвечники</a>
            <a href="#">Менажницы </a>
          </div>
        </div>
      </div>
      
    <div className='wood-map-img'><img srcSet={picture} alt="wood" /></div>  
    </div>
  )
}
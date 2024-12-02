import { useEffect, useState } from "react"
import { headerLogosList } from "../../constants"
import './header.scss'
const Header = () => {
  const [time, setTime] = useState({hours: 0, minutes: 0})
  function changeTime() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    setTime({ hours, minutes })
  }
  useEffect(()=>{
    changeTime()

    const interval = setInterval(() => {
      changeTime()
    }, 1000*60);

    return () => clearInterval(interval)
  },[])
  

  return (
    <div className="header">
      <div className="header__item">
        <p className="header__item-time">
          <span>{time.hours}</span>:<span>{time.minutes}</span>
        </p>
        <div className="header__item-list">
          {headerLogosList.map((item,index) => (
            <div key={index} className="header__item-list--child">
              <i className={item.classname}></i>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Header
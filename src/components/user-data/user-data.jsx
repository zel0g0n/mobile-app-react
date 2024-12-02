import Property from "../property/property"
import checkIcon from "/check.png"
import './user-data.scss'
import { dataUserOwn, userInterests } from "../../constants"

const UserData = () => {
  return (
    <div className="user__data">
      <div className="user__data-item">
        <p className="user__data-item-name">Login, 21 years</p>
        <p className="user__data-item-info">97% O‘xshashlik</p>
      </div>
      <div className="user__data-confirm">
        <img src={checkIcon} alt="icon" />
        подтвержденный
      </div>
      <ul className="user__data-properties">
        {dataUserOwn.map((item,index) => (
          <Property key={index} data={item} />
        ))}
      </ul>
      <p className="user__data-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consectetur possimus, facilis libero amet optio omnis recusandae velit beatae numquam pariatur nam non, aut iure, repellendus voluptates cupiditate tenetur fugit.
      </p>
      <ul className="user__data-interests">
        {userInterests.map((item,index) => (
          <Property key={index} data = {item}/>
        ))}
      </ul>
    </div>
  )
}

export default UserData
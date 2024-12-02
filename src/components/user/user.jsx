import UserData from "../user-data/user-data"
import UserContacts from "../user-contacts/user-contacts"
import './user.scss'
const User = () => {
  return (
    <div className="user">
      <UserData></UserData>
      <UserContacts></UserContacts>
    </div>
  )
}

export default User
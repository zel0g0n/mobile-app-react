import Property from '../property/property'
import UserAnswers from '../user-answers/user-answers'
import { userContactsData, userJoboData, familyStatus } from '../../constants'
import Border from '../border/border'
import './user-contacts.scss'

const UserContacts = () => {
  return (
    <div className='user__contacts'>
      {userContactsData.map((item,index) => (
        <Property key={index} data={item}/>
      ))}
      <Border></Border>
      {familyStatus.map((item,index) => (
        <Property key={index} data={item} />
      ))}
      <Border></Border>
      {userJoboData.map((item,index) => (
        <Property key={index} data={item} />
      ))}
      <Border></Border>
      <UserAnswers></UserAnswers>
    </div>
  )
}

export default UserContacts
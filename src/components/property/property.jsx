import PropTypes from 'prop-types'
import './property.scss'
const Property = ({data}) => {
  return (
    <div className='prop-block'>
      {data.title && <p className="property__title">{data.title}</p>}
      <li className="property">
        {data.icon && <i className={data.icon}></i>}
        <p className="property__child">{data.text}</p>
      </li>
    </div>
  )
}
Property.propTypes = {
  data: PropTypes.object
}
export default Property
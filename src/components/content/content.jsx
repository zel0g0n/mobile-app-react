import { imageDataList } from '../../constants'
import './content.scss'

const Content = () => {
  return (
    <div className='content'>
      {imageDataList.map((item, index) => (
        <img key={index} src={item.src} alt={item.alt} />
      ))}
    </div>
  )
}

export default Content
import './index.css'

const ThumbnailItem = props => {
  const {eachImage, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImage
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onChangeImage = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onChangeImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image" />
      </button>
    </li>
  )
}

export default ThumbnailItem

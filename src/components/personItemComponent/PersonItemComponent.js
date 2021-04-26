import './PersonItemComponent.scss'


const PersonItemComponent = ({name, imgUrl}) => {
  return (
    <div className="personItemComponent">
        <div className="personItem__img">
          <img src={imgUrl}/>
        </div>
        <div className="personItem__name">
            {name}
        </div>
    </div>
  )
}

export default PersonItemComponent

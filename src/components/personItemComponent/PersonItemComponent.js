import './PersonItemComponent.scss'
import { useHistory } from "react-router";

const PersonItemComponent = ({name, imgUrl, id}) => {
  let history = useHistory();
  return (
    <div onClick={() => {history.push(`/profil/${id}`)}} className="personItemComponent">
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

import { useState, useEffect } from 'react'
import PersonItemComponent from '../personItemComponent/PersonItemComponent'
import './ObsPanelComponent.scss'


const ObsPanelComponent = ({data = []}) => {

  const mappPerson = () => data.map(item => <PersonItemComponent key={item.id} name={item.name} imgUrl={item.imgUrl}/>)
  const [mappedPerson, setMappedPerson] = useState(mappPerson())


  useEffect(() => setMappedPerson(mappPerson()), [data]);

  return (
    <div className="obsPanelComponent">
      <div className="obsPanelComponent__title">
        Obserwowani ludzie
      </div>
      <div className="obsPanelComponent__people">
        {mappedPerson} 
      </div>
     
    </div>
  )
}

export default ObsPanelComponent

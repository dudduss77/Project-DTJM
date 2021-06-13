import { useState, useEffect, useContext } from 'react'
import PersonItemComponent from '../personItemComponent/PersonItemComponent'
import './ObsPanelComponent.scss'

import { globalContext } from "../../context/globalStore";

const ObsPanelComponent = ({data = []}) => {
  const { allUser } = useContext(globalContext);

  const mappPerson = () => data.map(item => <PersonItemComponent key={item.id} name={item.name} imgUrl={item.imgUrl}/>)
  
  const mapPerson = () => {
    // let temp = allUser.filter(item => !data.includes(item.userId))
    let temp = []

    allUser.forEach(element => {
      data.forEach(item => {
        if(element.userId === item.obsUserId) {
          temp.push(element);
        }
      })
    });

    console.log(allUser)
    console.log(data)
    console.log(temp)
    if(temp.length !== 0) return  temp.map(item => <PersonItemComponent id={item.userId} key={item.userId} name={item.name + " " + item.surname} imgUrl={item.avatarSrc}/>)
    // return  temp.map(item => <PersonItemComponent key={item.userId} name={item.name + " " + item.surname} imgUrl={item.avatarSrc}/>)
  }
  
  const [mappedPerson, setMappedPerson] = useState(mapPerson())


  useEffect(() => {
    // mapPerson()
    // setMappedPerson(mappPerson())
    setMappedPerson(mapPerson())
  } , [data]);

  return (
    <div className="obsPanelComponent">
      <h3 className="obsPanelComponent__title">
        Obserwowani ludzie
      </h3>
      <div className="obsPanelComponent__people">
        {mappedPerson} 
      </div>
     
    </div>
  )
}

export default ObsPanelComponent

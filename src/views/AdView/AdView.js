import React, {useContext, useState, useEffect} from 'react'
import './AdView.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router'
import { useParams} from "react-router-dom";

import {globalContext} from '../../context/globalStore'

const AdView = ({userAd = false}) => {
  let { id } = useParams();
  let history = useHistory();
  const {userData, testAd} = useContext(globalContext)
  const [data, setData] = useState({})

  useEffect(() => {
    if(userAd) {
      setData(userData.ad.find(item => item.id === parseInt(id)))
    } else {
      setData(testAd.find(item => item.id === parseInt(id)))
    }
  }, [])

  console.log(data)
  return (
    <div className="adView">
      <h3>{data.header}</h3>
      <h3>{data.desc}</h3>
      {userAd && <FontAwesomeIcon onClick={() => history.push(`/ad-settings/${id}`)} icon="cog" />}
    </div>
  )
}

export default AdView

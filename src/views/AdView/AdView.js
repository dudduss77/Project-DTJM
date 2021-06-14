import React, { useContext, useState, useEffect } from "react";
import "./AdView.scss";

import AdvertismentHeaderComponent from "../../components/advertismentHeaderComponent/AdvertismentHeaderComponent";
import DescriptionComponent from "../../components/descriptionComponent/DescriptionComponent";
import ListViewComponent from "../../components/listViewComponent/ListViewComponent";
import LinkDisplayComponent from "../../components/reusable/linkDisplayComponent/LinkDisplayComponent";
import PersonItemComponent from "../../components/personItemComponent/PersonItemComponent";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

import { globalContext } from "../../context/globalStore";

const AdView = ({ userAd = false }) => {
  let { id } = useParams();
  let history = useHistory();
  const { userData, testAd, allUser } = useContext(globalContext);
  const [data, setData] = useState({});

  useEffect(() => {
    // debugger
    if(testAd && testAd.length && allUser && allUser.length) {
      if (userAd) {
        // setData(userData.ad.find((item) => item.id === id));
        setData(testAd.find((item) => item.id === id));
      } else {
        setData(testAd.find((item) => item.id === id));
      }
    }
    console.log("useEff")
    console.log(userAd)
    console.log(userData)
    console.log(testAd)
    console.log(allUser)
    console.log(data)
  }, [userAd, testAd, allUser]);

  const owner = () => {
    let temp = allUser.find(({userId}) => userId === data.userId)
    // debugger
    if(temp) return <PersonItemComponent id={temp.userId} name={temp.name + " " + temp.surname} imgUrl={temp.avatarSrc}/>
  }

  return (testAd && testAd.length && allUser && allUser.length && data) ? (
    <div className="adView">
      <div className="adView__left">
        <AdvertismentHeaderComponent
          settingsClick={() => history.push(`/ad-settings/${id}`)}
          header={data.header}
          localization={data.location}
          img_src={data.imgSrc}
          user={!id || data.userId === userData.userId ? true : false}
        />

        {id ? (
          <>
          <h3>Założyciel</h3>
          {owner()}
          </>
        )
        :
        ""}
        
        <ListViewComponent header="Kategorie" list={data.category} />
        <ListViewComponent header="Skills" list={data.skills} />

        <LinkDisplayComponent data={data.links} />
      </div>
      <div className="adView__right">
        <DescriptionComponent header="Opis" content={data.desc} />
      </div>
    </div>
  ) : "Wczytywanie";
};

export default AdView;

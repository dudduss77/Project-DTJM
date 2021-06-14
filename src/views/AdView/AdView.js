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
    if (userAd) {
      setData(userData.ad.find((item) => item.id === parseInt(id)));
    } else {
      setData(testAd.find((item) => item.id === parseInt(id)));
    }
  }, []);

  const owner = () => {
    let temp = allUser.find(({userId}) => userId === data.userId)
    if(temp) return <PersonItemComponent name={temp.name} imgUrl={temp.avatarSrc}/>
  }

  return (
    <div className="adView">
      <div className="adView__left">
        <AdvertismentHeaderComponent
          settingsClick={() => history.push(`/ad-settings/${id}`)}
          header={data.header}
          localization={data.location}
          img_src={data.imgSrc}
          user={!id ? true : false}
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
  );
};

export default AdView;

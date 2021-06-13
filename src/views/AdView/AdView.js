import React, { useContext, useState, useEffect } from "react";
import "./AdView.scss";

import AdvertismentHeaderComponent from "../../components/advertismentHeaderComponent/AdvertismentHeaderComponent";
import DescriptionComponent from "../../components/descriptionComponent/DescriptionComponent";
import ListViewComponent from "../../components/listViewComponent/ListViewComponent";
import LinkDisplayComponent from "../../components/reusable/linkDisplayComponent/LinkDisplayComponent";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

import { globalContext } from "../../context/globalStore";

const AdView = ({ userAd = false }) => {
  let { id } = useParams();
  let history = useHistory();
  const { userData, testAd } = useContext(globalContext);
  const [data, setData] = useState({});

  useEffect(() => {
    if (userAd) {
      setData(userData.ad.find((item) => item.id === parseInt(id)));
    } else {
      setData(testAd.find((item) => item.id === parseInt(id)));
    }
  }, []);

  console.log("data", data);
  return (
    <div className="adView">
      {/* <h3>{data.header}</h3>
      <h3>{data.desc}</h3>
      {userAd && <FontAwesomeIcon onClick={() => history.push(`/ad-settings/${id}`)} icon="cog" />} */}
      <div className="adView__left">
        <AdvertismentHeaderComponent
          settingsClick={() => history.push(`/ad-settings/${id}`)}
          header={data.header}
          localization={data.location}
          img_src={data.imgSrc}
          user={true}
        />
        <ListViewComponent 
          header="Kategorie"
          list={data.category}
        />
        <ListViewComponent 
          header="Skills"
          list={data.skills}
        />

      <LinkDisplayComponent data={data.links}/>
      </div>
      <div className="adView__right">
        <DescriptionComponent header="Opis" content={data.desc}/>
      </div>
    </div>
  );
};

export default AdView;

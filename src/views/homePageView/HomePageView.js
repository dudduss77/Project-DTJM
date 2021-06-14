import { useContext, useEffect, useState } from "react";
import AdBlockComponent from "../../components/adBlockComponent/AdBlockComponent";
import AdBlockWrapperComponent from "../../components/adBlockWrapperComponent/AdBlockWrapperComponent";
import CategoryChoiceComponent from "../../components/categoryChoiceComponent/CategoryChoiceComponent";
import SearchMainPageComponent from "../../components/searchMainPageComponent/SearchMainPageComponent";
import { globalContext } from "../../context/globalStore";
import "./HomePageView.scss";

const HomePageView = () => {
  const {
    userData: { logged, adObs },
    testAd,
  } = useContext(globalContext);
  const [obsAd, setObsAd] = useState([]);

  const retObsAd = () => {
    let temp = [];
    testAd.forEach((element) => {
       adObs.forEach((item) => {
        if (element.id === item.obsAdId) {
          temp.push(element);
        }
      });
    });
    // console.log(testAd);
    // console.log(adObs);
    // console.log(temp);

    if (temp.length !== 0)
      return (
        <AdBlockWrapperComponent
          header="Obserwowane ogłoszenia"
          data={temp}
          obsData={true}
        />
      );
  };

  return (
    <div className="homePageView">
      <SearchMainPageComponent />
      {logged && adObs ? retObsAd() : ""}
      <CategoryChoiceComponent />
      <AdBlockWrapperComponent header="Ogłoszenia" />
    </div>
  );
};

export default HomePageView;

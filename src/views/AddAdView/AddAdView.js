import React, { useEffect, useState, useContext } from "react";
import moment from "moment";

import TemplateOne from "../../templatesComponents/TemplateOne/TemplateOne";
import AdFormComponent from "../../components/adFormComponent/AdFormComponent";

import AddLinks from "../../components/reusable/addLinks/AddLinks";
import LinkDisplayComponent from "../../components/reusable/linkDisplayComponent/LinkDisplayComponent";

import ImageWrapperComponent from "../../components/imageWrapperComponent/ImageWrapperComponent";
import AddItemComponent from "../../components/addItemComponent/AddItemComponent";
import ItemDisplayComponent from "../../components/itemDisplayComponent/ItemDisplayComponent";

import { globalContext } from "../../context/globalStore";
// import { userActionType } from "../../context/reducers/userDataReducer";
import * as AdService from './../../services/adService.js'
import { NotificationManager } from "react-notifications";
import { useHistory } from "react-router";

const AddAdView = () => {
  const { userData, setUserData, category, links, skills } =
    useContext(globalContext);
  const [adData, setAdData] = useState(null);
  const [adImage, setAdImage] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [linksData, setLinksData] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);

  const history = useHistory();

  const deleteLinks = (id) => {
    setLinksData(linksData.filter((item) => item.path !== id));
  };

  const deleteCategory = (id) => {
    setCategoryData(categoryData.filter((item) => item !== id));
  };

  const deleteSkills = (id) => {
    setSkillsData(skillsData.filter((item) => item !== id));
  };

  const adFormComponent = (
    <>
      <h3>Podstawowe Dane</h3>
      <AdFormComponent getData={setAdData} informToGetData={buttonClick} />
    </>
  );

  const leftBottom = (
    <>
      <ImageWrapperComponent
        informToGetData={buttonClick}
        getData={setAdImage}
      />
    </>
  );

  const midOne = (
    <>
      <h3>Kategorie</h3>
      <AddItemComponent
        data={category.filter((item) => !categoryData.includes(item.name))}
        placeholder="Wybierz kategorie"
        getData={setCategoryData}
      />
      <h4>Wybrane Kategorie</h4>
      <ItemDisplayComponent
        data={categoryData}
        delFun={(val) => deleteCategory(val)}
      />
    </>
  );

  const midTwo = (
    <>
      <h3>Skills</h3>
      <AddItemComponent
        data={skills.filter((item) => !skillsData.includes(item.name))}
        placeholder="Wybierz skille"
        getData={setSkillsData}
      />
      <h4>Wybrane skille</h4>
      <ItemDisplayComponent
        data={skillsData}
        delFun={(val) => deleteSkills(val)}
      />
    </>
  );

  const right = (
    <>
      <h3>Linki</h3>
      <AddLinks getData={setLinksData} existData={linksData} />
      <h4>Wybrane linki</h4>
      <LinkDisplayComponent
        data={linksData}
        editMode={true}
        deleteFun={(val) => deleteLinks(val)}
      />
    </>
  );

  useEffect(() => {
    submitNewAd();
  }, [buttonClick, adData]);

  const submitNewAd = () => {
    console.log(adData);
    if (adData) {
      let categoryObjectArray = categoryData.map((item, index) => ({id: (category.find(it => item == it.name)).id }));
      let skillObjectArray = skillsData.map((item, index) => ({id: (skills.find(it => item == it.name)).id }));
      let ad = {
        // id: parseInt(userData.userId.toString() + moment.now().toString()),
        userId: userData.userId,
        imgSrc: adImage,
        imgAlt: adData.adName,
        header: adData.adName,
        desc: adData.adDesc,
        location: adData.adLocation,
        category: categoryObjectArray,
        skills: skillObjectArray,
        links: linksData,
      };
      console.log("klikam")
      console.log(ad);
      console.log("koniec klika");

      AdService.add(ad, (doc_id) => {
        NotificationManager.success("Dodano nowe ogłoszenie");
        setTimeout(function(){ history.push("/ad/" + doc_id) }, 3000);
      })
      // setUserData({ type: userActionType.addAd, payload: ad });
      setButtonClick(false);
      setAdData(null);
    } else setButtonClick(false);
  };

  return (
    <TemplateOne
      header="Dodawanie ogłoszenia"
      leftTop={adFormComponent}
      leftBottom={leftBottom}
      midOne={midOne}
      midTwo={midTwo}
      right={right}
      buttonClick={() => setButtonClick(true)}
    />
  );
};

export default AddAdView;

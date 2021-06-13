import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import TemplateTwo from "../../templatesComponents/TemplateTwo/TemplateTwo";
import AdFormComponent from "../../components/adFormComponent/AdFormComponent";
import DeleteAd from "../../components/adSettingsViewComponent/DeleteAd";

import AddLinks from "../../components/reusable/addLinks/AddLinks";
import LinkDisplayComponent from "../../components/reusable/linkDisplayComponent/LinkDisplayComponent";

import ImageWrapperComponent from "../../components/imageWrapperComponent/ImageWrapperComponent";
import AddItemComponent from "../../components/addItemComponent/AddItemComponent";
import ItemDisplayComponent from "../../components/itemDisplayComponent/ItemDisplayComponent";

import { globalContext } from "../../context/globalStore";
import { userActionType } from "../../context/reducers/userDataReducer";

const AdSettingsView = () => {
  let { id } = useParams();
  const { userData, setUserData, category, links, skills } =
    useContext(globalContext);
  const [adData, setAdData] = useState(null);
  const [adImage, setAdImage] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [linksData, setLinksData] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);

  useEffect(() => {
    let temp = userData.ad.find((item) => item.id === parseInt(id));
    console.log(temp);
    setCategoryData(temp.category.map((item) => item.name));
    setSkillsData(temp.skills.map((item) => item.name));
    setLinksData(temp.links);
    setAdImage(temp.imgSrc);
  }, [userData]);

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
      <AdFormComponent
        getData={setAdData}
        informToGetData={buttonClick}
        settings={true}
      />
    </>
  );

  const leftBottom = (
    <>
      <ImageWrapperComponent
        setData={adImage}
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

  const midThree = (
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

  const right = (
    <>
      <h3>Usuwanie ogłoszenia</h3>
      <DeleteAd />
    </>
  );

  useEffect(() => {
    submitEditTask();
  }, [buttonClick, adData]);

  const submitEditTask = () => {
    console.log("edit", adData);
    console.log("edit", categoryData);
    console.log("edit", skillsData);
    console.log("edit", linksData);
    let categoryObjectArray = categoryData.map((item, index) => ({
      id: index,
      name: item,
    }));
    let skillObjectArray = skillsData.map((item, index) => ({
      id: index,
      name: item,
    }));
    if (adData) {
      let ad = {
        id: parseInt(adData.id),
        imgSrc: adImage,
        imgAlt: adData.adName,
        header: adData.adName,
        desc: adData.adDesc,
        location: adData.adLocation,
        category: categoryObjectArray,
        skills: skillObjectArray,
        links: linksData,
      };

      setUserData({
        type: userActionType.editAd,
        payload: { id: parseInt(adData.id), editAd: ad },
      });
      setButtonClick(false);
      setAdData(null);
    } else setButtonClick(false);
  };

  return (
    <TemplateTwo
      header="Edycja ogłoszenia"
      leftTop={adFormComponent}
      leftBottom={leftBottom}
      midOne={midOne}
      midTwo={midTwo}
      midThree={midThree}
      right={right}
      buttonClick={() => setButtonClick(true)}
    />
  );
};

export default AdSettingsView;

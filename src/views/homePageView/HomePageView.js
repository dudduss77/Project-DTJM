
import { useContext } from 'react'
import AdBlockComponent from '../../components/adBlockComponent/AdBlockComponent'
import AdBlockWrapperComponent from '../../components/adBlockWrapperComponent/AdBlockWrapperComponent'
import CategoryChoiceComponent from '../../components/categoryChoiceComponent/CategoryChoiceComponent'
import SearchMainPageComponent from '../../components/searchMainPageComponent/SearchMainPageComponent'
import { globalContext } from '../../context/globalStore'
import './HomePageView.scss'

const HomePageView = () => {
  const {userData : {logged}} = useContext(globalContext)
  return (
    <div className="homePageView">
      <SearchMainPageComponent/>
      {logged ? (<AdBlockWrapperComponent
      header="Moje Ogłoszenia"
      />) : ""}
      <CategoryChoiceComponent/>
      <AdBlockWrapperComponent
      header="Ogłoszenia"
      />
    </div>
  )
}

export default HomePageView

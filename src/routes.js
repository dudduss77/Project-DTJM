import TestComponent from './components/testComponent/TestComponent'
import HomePageView from './views/homePageView/HomePageView'
import UserProfileView from './views/UserProfileView/UserProfileView'
import PreQuestionnaireView from './views/PreQuestionnaireView/PreQuestionnaireView'
import AddAdView from './views/AddAdView/AddAdView'
import UserSettingsView from './views/UserSettingsView/UserSettingsView'
import AdSettingsView from './views/AdSettingsView/AdSettingsView'
import AdView from './views/AdView/AdView'

export const routes = [
  {
    path: "/",
    component: HomePageView
  },
  {
    path: "/profil",
    component: UserProfileView
  },
  {
    path: "/test",
    component: TestComponent
  },
  {
    path: "/profil/:id",
    component: UserProfileView
  },
  {
    path: "/pre-questionnaire",
    component: PreQuestionnaireView
  },
  {
    path: "/add-ad",
    component: AddAdView
  },
  {
    path: "/user-settings",
    component: UserSettingsView
  },
  {
    path: "/ad-settings/:id",
    component: AdSettingsView
  },
  {
    path: "/ad/:id",
    component: AdView
  },
  {
    path: "/my-ad/:id",
    component: () => <AdView userAd={true}/>
  },
]
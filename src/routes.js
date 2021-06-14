import TestComponent from './components/testComponent/TestComponent'
import HomePageView from './views/homePageView/HomePageView'
import UserProfileView from './views/UserProfileView/UserProfileView'
import PreQuestionnaireView from './views/PreQuestionnaireView/PreQuestionnaireView'
import AddAdView from './views/AddAdView/AddAdView'
import UserSettingsView from './views/UserSettingsView/UserSettingsView'
import AdSettingsView from './views/AdSettingsView/AdSettingsView'
import AdView from './views/AdView/AdView'
import SearchView from './views/SearchView/SearchView'

export const routes = [
  {
    path: "/",
    component: HomePageView, 
  },
  {
    path: "/profil",
    component: UserProfileView,
    private: true
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
    component: PreQuestionnaireView,
    private: true
  },
  {
    path: "/add-ad",
    component: AddAdView,
    private: true
  },
  {
    path: "/user-settings",
    component: UserSettingsView,
    private: true
  },
  {
    path: "/ad-settings/:id",
    component: AdSettingsView,
    private: true
  },
  {
    path: "/ad/:id",
    component: AdView
  },
  {
    path: "/my-ad/:id",
    component: () => <AdView userAd={true}/>,
    private: true
  },
  {
    path: "/search",
    component: SearchView
  },
]
import TestComponent from './components/testComponent/TestComponent'
import HomePageView from './views/homePageView/HomePageView'
import UserProfileView from './views/UserProfileView/UserProfileView'
import PreQuestionnaireView from './views/PreQuestionnaireView/PreQuestionnaireView'

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
]
import TestComponent from './components/testComponent/TestComponent'
import UserProfileView from './views/UserProfileView/UserProfileView'
import PreQuestionnaireView from './views/PreQuestionnaireView/PreQuestionnaireView'

export const routes = [
  {
    path: "/",
    component: TestComponent
  },
  {
    path: "/profil",
    component: UserProfileView
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
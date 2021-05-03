import TestComponent from './components/testComponent/TestComponent'
import UserProfileView from './views/UserProfileView/UserProfileView'

export const routes = [
  {
    path: "/",
    component: TestComponent
  },
  {
    path: "/profil",
    component: UserProfileView
  },
]
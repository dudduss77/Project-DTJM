import TestComponent from './components/testComponent/TestComponent'
import HomePageView from './views/homePageView/HomePageView'
import UserProfileView from './views/UserProfileView/UserProfileView'

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
]
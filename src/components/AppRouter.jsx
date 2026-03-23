import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/loginPage/entry/LoginPage'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
])

export default AppRouter

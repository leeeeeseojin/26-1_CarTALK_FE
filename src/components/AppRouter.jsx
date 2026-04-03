import { createBrowserRouter, Outlet } from 'react-router-dom'
import LoginPage from '../pages/loginPage/entry/LoginPage'
import Sidebar from './sidebar/Sidebar'
import SearchPage from '../pages/searchPage/entry/SearchPage'
import SignupPage from '../pages/signupPage/entry/SignupPage'

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: '250px' }}>
        <header
          style={{
            height: '70px',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            padding: '0 30px',
            borderBottom: '1px solid #ddd',
          }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: '#e0e0e0',
              borderRadius: '50%',
              marginRight: '15px',
            }}
          ></div>{' '}
          {/* 회색 원 */}
          <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '1px' }}>
            CAR TALK
          </span>
        </header>

        <main style={{ flex: 1, backgroundColor: '#fafafa', padding: '40px' }}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

const AppRouter = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <SearchPage />,
      },
      // { path: 'chat', element: <ChatRoomPage /> }, // 추후 추가
    ],
  },
])

export default AppRouter

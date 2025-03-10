import { createBrowserRouter } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/login';
import Signup from './components/auth/Signup';
import { RouterProvider } from 'react-router-dom';
import Home from './components/Home';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])
export default function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

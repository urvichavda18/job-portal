import { createBrowserRouter } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/login';
import Signup from './components/auth/Signup';
import { RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import Companies from './components/admin/Companies';

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
  },
  {
    path: '/Jobs',
    element: <Jobs />
  },
  {
    path:'/description/:id',
    element:<JobDescription />
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'profile',
    element:<Profile/>
  },
  //admin 
  {
    path:'/admin/companies',
    element:<Companies/>
  }
])
export default function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Politica from '../pages/politica';
import User from '../pages/user';




const router = createBrowserRouter([
  {
    // element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/politica",
        element: <Politica/>
      },
      {
        path: "/user",
        element: <User/>
      },
     
    ]
  }
])

export { router };
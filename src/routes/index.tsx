import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Politica from '../pages/politica';
import User from '../pages/user';




const router = createBrowserRouter([
  
      {
        path: "/clickgasweb/",
        element: <Home/>
      },
      {
        path: "/clickgasweb/login",
        element: <Login/>
      },
      {
        path: "/clickgasweb/politica",
        element: <Politica/>
      },
      {
        path: "/clickgasweb/user",
        element: <User/>
      },

])

export { router };
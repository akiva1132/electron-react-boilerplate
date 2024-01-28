import { createBrowserRouter } from 'react-router-dom';


import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Stage1 from './Stage1/Stage1';
import Stage2 from './Stage2/Stage2';
import HomePage from './HomePage/HomePage';
import Headers2 from './Headers';
import Stage3 from './Stage3/Stage3';
import { Navi2 } from './navi';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Headers2/>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/SignIn',
        element: <SignIn />,
      },
      {
        path: '/SignUp',
        element: <SignUp />,
      },
      {
        path: '/stage1',
        element: <Stage1 />,
      },
      {
        path: '/stage2',
        element: <Stage2 />,
      },
      {
        path: '/stage3',
        element: <Stage3 />,
      },
      {
        path: '*',
        element: <Navi2/>
      },
    ]
  },


]);


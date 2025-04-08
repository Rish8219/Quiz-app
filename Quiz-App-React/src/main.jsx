import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Quiz from './components/Quiz.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import { Protected } from './components/protected.jsx'
import Edit from './components/Edit.jsx'
// import Protected from './components/protected.jsx'

// let routes = createBrowserRouter([{
//   path: '/',
//   element: <App />,
//   children: [
//     {
//       path: '/',
//       element: <Home />
//     },
//     {
//       path: '/quiz',
//       element:<Protected> <Quiz /></Protected>
//     },
//    {
//       path: '/profile',
//       element:<Protected> <Profile /></Protected>
//     }
// {
//   path: '/quiz',
//   element:<Protected/>,
//   children:[
//     {
//       path: '/quiz',
//       element: <Quiz />

//     }
//     ,
//     {
//       path: '/profile',
//       element: <Profile />
//     }
//   ]
// }
//   ]},
//   {
//     path: '/signup',
//     element: <Signup />
//   },
//  {
//     path: '/login',
//     element: <Login />
//   }])
let routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/quiz', element: <Protected><Outlet /></Protected>,
        children: [
          { path: '', element: <Quiz /> }
        ]
      },
      {
        path: '/profile', element: <Protected><Outlet /></Protected>, children: [
          { path: '', element: <Profile /> }, { path: "/profile/edit/:id", element: <Edit /> }
        ]
      }
    ]
  },
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)

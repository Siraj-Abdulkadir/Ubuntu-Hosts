import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Login} from './Login.tsx'
import { SignUp } from './SignUp.tsx'
import EventDetails from './EventDetails.tsx'

const route = createBrowserRouter([
  {  path:'/' , element:<App/> },
  {  path:'/login' , element:<Login/> },
  {  path:'/signup' , element:<SignUp/> },
   {  path:'/details' , element:<EventDetails/> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={route}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {SignUp} from './SignUp.tsx'
const route = createBrowserRouter([
  {  path:'/' , element:<App/> },
  {  path:'/signup' , element:<SignUp/> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={route}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Login} from './Login.tsx'
import { SignUp } from './SignUp.tsx'
import EventDetails from './EventDetails.tsx'
import { Table } from 'lucide-react'
import { TableComponent } from './TableComponent.tsx'
import OrganizerDashboard from './OrganizerDashboard.tsx'

const route = createBrowserRouter([
  {  path:'/' , element:<App/> },
  {  path:'/login' , element:<Login/> },
  {  path:'/signup' , element:<SignUp/> },
   {  path:'/details' , element:<EventDetails/> },
   {  path:'/view-dashboard' , element:<TableComponent/> },
   {  path:'/dashboard' , element:<OrganizerDashboard/> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={route}/>
  </StrictMode>,
)

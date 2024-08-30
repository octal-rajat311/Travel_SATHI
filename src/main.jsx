import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CreateTrip from './create_trip/index.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/custom/header.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from './view_trip/[tripId]/index.jsx'
import Mytrip from './my_trip/index.jsx'

const router=createBrowserRouter([
  {
    path: "/",
    element: <App/>

  },
  {
    path: "/create-trip",
    element: <CreateTrip/>

  },
  {
    path: "/view-trip/:tripId",
    element: <Viewtrip/>

  },
  {
    path: "/my_trip",
    element: <Mytrip/>

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header/>
    <RouterProvider router={router}/>
    </GoogleOAuthProvider>;
  </StrictMode>,
)

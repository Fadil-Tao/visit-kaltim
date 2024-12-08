import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/root-layout'
import './index.css'
import Landing from './pages/landing'
import DestinationPage from './pages/destination'
import DestinationDetailPage from './pages/destination-detail'
import GalleryPage from './pages/gallery'

//  routing url 
const router = createBrowserRouter([
  {
      path: '',
      element: <RootLayout />,
      children:[
        {
            path:'',
            element:<Landing/>
        },
          {
              path:'/destination',
              element: <DestinationPage/>
          },
          {
              path:'/gallery',  
              element: <GalleryPage/>
          },
          {
              path:'/destination/:slug', // slug ini buat dinamik item didalamnya, jadi isinya bisa berdasarkan title dari destinasi
              element: <DestinationDetailPage/>
          }
      ]   
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)

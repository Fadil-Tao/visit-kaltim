import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/root-layout'
import './index.css'
import Landing from './pages/landing'


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
              path:'/destinations',
              element: <div>Gugu crazy gaga</div>
          },
          {
              path:'/destinations/:slug',
              element: <div className="text-blue-900">Destination slug details page</div>
          }
      ]   
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)

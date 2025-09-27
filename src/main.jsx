import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ErrorPage from './components/404.jsx'
import HomePage from './components/HomePage.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import AddBook from './components/AddBook.jsx'
import BookContainer from './components/BookContainer.jsx'
import BookDetails from './components/BookDetails.jsx'



const appRoute = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<HomePage/>

    },
    {
      path:"/BrowseBooks",
      element:<BrowseBooks/>,
      children:[
        {
             path:"/BrowseBooks/books/",
          element:<BookContainer/>
        },
        {
          path:"/BrowseBooks/books/:category",
          element:<BookContainer/>
          
      },
    ]
    },
    {
      path:"/AddBook",
      element:<AddBook/>
    },
    {
      path:"/BookDetails/:id",
      element:<BookDetails/>
    }
  ]
},
{

}])

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={appRoute}>

      </RouterProvider>

    </React.StrictMode>
)

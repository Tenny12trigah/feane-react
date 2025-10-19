import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import BookTable from './pages/BookTable'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Mainlayout from './Layout/Mainlayout'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <> 
        <Route path='/' element={<Mainlayout/>} >
        <Route index element = {<Home/>} />
        <Route path='/booktable' element = {<BookTable/>} />
        <Route path='/menu' element = {<Menu/>} />
        <Route path='/about' element = {<About/>} />
        </Route>
       </>
    
    )
  )
  return (
  <RouterProvider router={router}/>

  )
}

export default App
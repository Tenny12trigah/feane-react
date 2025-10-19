import React from 'react'
import Clients from '../components/Clients'
import Promo from '../components/Promo'
import About from '../components/About'
import BookTable from '../components/Booking'
import MenuList from '../components/MenuList'

const Home = () => {
  return (
    <div> 
       <Promo/>
              <MenuList/>
              <About/>
              <BookTable/>
              <Clients/>
              </div>
  )
}

export default Home
import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/Explore Menu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Appdown from '../../components/AppDown/AppDown'
const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu  category={category} setCategory={setCategory}/>
      <FoodDisplay  category={category} />
      <Appdown />
    </div>

  )
}

export default Home
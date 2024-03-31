
import { useState } from "react"
import ExplorMenu from "../../components/explorMenu/ExplorMenu"
import Hero from "../../components/hero/Hero"
import "./HomePage.css"
import FoodDisplay from "../../components/foodDisplay/FoodDisplay"
const HomePage = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Hero />
      <ExplorMenu category={category}  setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default HomePage

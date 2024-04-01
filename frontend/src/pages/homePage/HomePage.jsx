
import { useState } from "react"
import ExplorMenu from "../../components/explorMenu/ExplorMenu"
import Hero from "../../components/hero/Hero"
import "./HomePage.css"
import FoodDisplay from "../../components/foodDisplay/FoodDisplay"
import Footer from "../../components/footer/Footer"
const HomePage = () => {
  const [category, setCategory] = useState("All")
  return (
    <>
      <Hero />
      <ExplorMenu category={category}  setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Footer />
    </>
  )
}

export default HomePage

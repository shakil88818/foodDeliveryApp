
import { useState } from "react"
import ExplorMenu from "../../components/explorMenu/ExplorMenu"
import Hero from "../../components/hero/Hero"
import "./HomePage.css"
import FoodDisplay from "../../components/foodDisplay/FoodDisplay"
import AppDownload from "../../components/appDownload/AppDownload"

const HomePage = () => {
  const [category, setCategory] = useState("All")
  return (
    <>
      <Hero />
      <ExplorMenu category={category}  setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </>
  )
}

export default HomePage

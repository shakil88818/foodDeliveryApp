
import { useState } from "react"
import ExplorMenu from "../../components/explorMenu/ExplorMenu"
import Hero from "../../components/hero/Hero"
import "./HomePage.css"
const HomePage = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Hero />
      <ExplorMenu category={category}  setCategory={setCategory} />
    </div>
  )
}

export default HomePage

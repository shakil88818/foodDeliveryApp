import { useContext } from "react"
import "./FoodDisplay.css"
import { StoreContext } from "../../context/StoreContext"
import FoodItem from "../foodItem/FoodItem"

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <>
      <section className="foodDisplay-wrapper">
        <div className="container-c">
            <div className="foodDisplay">
                <h2>Top Dishes Near you</h2>
                <div className="foodDisplay-list">
                    {
                        food_list.map((item,index)=>{

                            if(category==="All" || category===item.category){
                                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                            }
                        })
                    }
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default FoodDisplay

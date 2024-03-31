import { menu_list } from "../../assets/assets"
import "./ExplorMenu.css"

const ExplorMenu = ({category, setCategory}) => {
  return (
    <>
      <section className="Explore-wrapper">
        <div className="container-c">
            <div className="explore-menu">
                <h2>Explore Our Menu</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <div className="explore-menu-list">
                    {
                        menu_list.map((item,index)=>{
                            return(
                                <div onClick={()=>setCategory(prev =>prev===item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                                    <img className={category===item.menu_name ? "active" :""} src={item.menu_image} alt="menulist" />
                                    <p>{item.menu_name}</p>
                                </div>

                            )
                        })
                    }
                </div>
                <hr />
            </div>
        </div>
      </section>
    </>
  )
}

export default ExplorMenu
import { assets } from "../../assets/assets"
import "./AppDownload.css"

const AppDownload = () => {
  return (
    <>
      <section className="appDownload-wrapper" id="appDownload">
        <div className="appDownload-content">
            <p>For Better Experience Download <br /> Tomato App</p>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      </section>
    </>
  )
}

export default AppDownload

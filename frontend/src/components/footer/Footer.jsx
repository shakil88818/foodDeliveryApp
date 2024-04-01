import "./Footer.css"
import {assets} from '../../assets/assets'


const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="container-c">
            <div className="footer-content">

                    <div className="left-content">
                        <div>
                        <img src={assets.logo} alt="" />
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae earum sint vero, sunt labore corrupti repellendus unde. Est, officia similique!</p>
                        <div className="footer-social">
                            <img src={assets.linkedin_icon} alt="" />
                            <img src={assets.facebook_icon} alt="" />
                            <img src={assets.twitter_icon} alt="" />
                        </div>
                    </div>

                    <div className="middle-content">
                        <h3>Company</h3>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div className="right-content">
                        <h3>Get in Touch</h3>
                        <ul>
                        <li><a href="tel:+88-0123456789">+88-0123456789</a></li>
                        <li><a href="mailto:tamato@gmail.com">tamato@gmail.com</a></li>
                        </ul>
                    </div>

            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

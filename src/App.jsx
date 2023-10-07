import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <header>
        <nav>
        <div className="container">
            <div className="nav_box">
                <div className="title">
                    <p>Vegetables</p>
                </div>
                    <div className="social-bar">
                            <a className="social-icon" href="#"><img src="images/btn_facebook.png" alt="臉書icon" /></a>
                            <a className="social-icon"href="#"><img src="images/btn_instagram.png" alt="IG-icon" /></a>
                            <span></span>
                            <a href="#"><div className="text-box">LOGIN</div></a>
                            <a href="#"><div className="text-box">JOIN</div></a>
                    </div>
            </div>  
        </div>

        <ul className="container navbar">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Vegetables</a></li>
            <li><a href="#">Online</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
    </header>
    <main className="main-content">
        <section className="container picture">
        <img src="images/img_main_pumpkin.png" alt="南瓜圖片" /> 
        </section>

        <section>
        <div className="out-box container">
            <p className="box-1">Vegetables</p>
            <p className="box-2">Contact</p>
        </div>    
        
        </section>
        <section>
          <div className="container out-box2">
              <div className="img-three">
                  <img src="images/img_vegetables_pepper.png" alt="甜椒圖片" />
                  <img src="images/img_vegetables_carrot.png" alt="紅蘿蔔圖片" className="img-carrot" />
                  <img src="images/img_vegetables_corn.png" alt="玉米圖片" />
              </div>
              <div className="content-box">
                  <p>For any questions or suggestions about Vegetables, Vegetables Club or your 
                      online order you can contact Vegetables Customer Service by phone, email 
                      or post and we’ll be happy to help.</p>
                  <hr />
                  <p>E-mail : Vegetables@aaabbccc.com<br />PHONE : +886-123-456-789</p>
                  
              </div>    
          </div>
        </section>
    </main>
    <footer>
        <p>Copyrights @2017 Vegetables cise / Design by Vegetables</p>
    </footer>
  </div>
  )
}

export default App

export default function header() {
    return(
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
    ); 
}
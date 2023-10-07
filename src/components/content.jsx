export default function content() {
    return(
        <div>
    
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
    
  </div>
    );
}
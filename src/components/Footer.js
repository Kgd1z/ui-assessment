export const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section">
                    
                    <ul style={{ listStyle: 'none', fontSize: 14 }}>
                        <h4>Main Menu</h4>
                        <li>Home</li>
                        <li>T-shirts</li>
                        <li>NBA</li>
                        <li>Tracksuits</li>
                        <li>Products Delivery  •  1 – 2 days</li>
                        <li>Contact</li>
                        <li>Reviews</li>
                    </ul>
                </div>
                <div className="footer-section">
                    
                    <ul style={{listStyle:'none',fontSize:14}}>
                        <h4>Secondary Menu</h4>
                        <li>Search</li>
                        <li>Privacy Policy</li>
                        <li>Shipping Policy</li>
                        <li>Returns Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Subscribe</h4>
                    <div style={{width:240}}>
                        <p>Subscribe to our mailing list to receive the latest news.</p>
                    </div>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <input style={{ fontSize:12,height: 40, border: '1px solid #EAEAEC',paddingLeft:20,width:240}} type="text" placeholder="Enter Address"/>
                        <div style={{ width:40, height: 40, backgroundColor: '#F9DC38', alignSelf: 'flex-end', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img style={{}} src={require('../assets/icons/png/paper-plane.png')} />

                        </div>
                    </div>
                    
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: 30, height: 30, marginRight: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111112' }}>
                            <img style={{}} src={require('../assets/icons/png/facebook-f.png')} />
                        </div>
                        <div style={{ width: 30, marginRight: 10, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111112' }}><img style={{}} src={require('../assets/icons/png/twitter.png')} /></div>
                        <div style={{ width: 30, marginRight: 10, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111112' }}> <img style={{}} src={require('../assets/icons/png/instagram.png')} /></div>


                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <div><p>© 2021 Jambulani  •  All rights reserved</p></div>
                <div>

                    <img style={{ }} src={require('../assets/images/payment-partners.png')} />
                </div>
            </div>
        </footer>
    )
}
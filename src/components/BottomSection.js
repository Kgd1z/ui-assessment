import socialNetworks from '../assets/images/social-networks.jpg';
import personalization from '../assets/images/personalization.jpg';


export const BottomSection = () => {

    return (
        <div className='BottomSection'>

            <div className="bottom-personalization">
    <div style={{ alignSelf:'flex-end',color:'#FFFFFF',margin:'0 40px 40px 40px'}}>
        <h1>PERSONALIZATION</h1>
                    <p>Put a custom print on the football shirt of your choice with our Personalization service.</p>
                    <p>Tell us what name, what number and we put it. FREE!!!</p>

    </div>
            </div>

       
            <div className="bottom-social">
                <div style={{ alignSelf: 'flex-end', color: '#FFFFFF', margin: '0 40px 40px 40px' }}>
                    <h1>SOCIAL NETWORKS</h1>
                    <p>Share your shirts with us with the #CamisetasFutbolSpainnn</p>
                  <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{ width: 30, height: 30, marginRight: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF'}}>
                            <img style={{  }} src={require('../assets/icons/png/facebook-f-black.png')} />
                  </div>
                        <div style={{ width: 30, marginRight:10,height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}><img style={{   }} src={require('../assets/icons/png/twitter-black.png')} /></div>
                        <div style={{ width: 30, marginRight: 10, height: 30,display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF'}}> <img style={{   }} src={require('../assets/icons/png/instagram-black.png')} /></div>
                        
                       
                  </div>

                </div>

            </div>

           


        </div>
    )
}




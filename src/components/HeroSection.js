import '../App.css';
export const HeroSection = ()=>{
    return(
       
            <div className="hero-section">
            <div style={{ width: 488,  paddingTop: 80, paddingLeft: 80, fontSize: 40, fontWeight: 700}}>
                <p style={{color:'#FFFFFF'}}>Your favorite customized <span style={{ color: '#FADD18' }}>Club Jerseys.</span></p>

              
            </div>
                <div style={{}}>
                <div style={{display:'flex', width: 140, height: 40, border: '1px solid white',position:'absolute',top:440,right:70}}>
                   <div style={{width:100,display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <p style={{ color: 'white', fontSize: 12,fontWeight:600 }}>Shop Now</p>
                   </div>
                
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#FFFFFF',width:40,}}>
                        <img src={require('../assets/icons/png/bag.png')} alt="search" />
                    </div>
                   </div>
                    
                </div>

            </div>

       
    )
}
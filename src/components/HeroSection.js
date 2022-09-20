import '../App.css';
export const HeroSection = ()=>{
    return (
      <div className="hero-section flex-column jc-space-between">
        <h1 className="white">
          Your favorite customized
          <br />
          <span style={{ color: "#FADD18" }}>Club Jerseys.</span>
        </h1>
        <div className="flex jc-space-between ai-center">
          <div className="flex jc-space-between ai-center flex-gap">
            <div className="yellow md-hide" style={{ width: 100, height: 8 }}></div>
            <div className="yellow md-hide" style={{ width: 100, height: 8 }}></div>
            <div className="yellow md-hide" style={{ width: 100, height: 8 }}></div>
            <div className="yellow md-hide" style={{ width: 100, height: 8 }}></div>
          </div>
          <div
            style={{
              display: "flex",
              width: 140,
              height: 40,
              border: "1px solid white",
          
            }}
          >
            <div
              style={{
                width: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ color: "white", fontSize: 12, fontWeight: 600 }}>
                Shop Now
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                width: 40,
              }}
            >
              <img src={require("../assets/icons/png/bag.png")} alt="search" />
            </div>
          </div>
        </div>
        
      </div>
    );
}
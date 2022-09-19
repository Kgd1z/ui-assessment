import { SearchHeader } from "../components/SecondHeader";
import { ItemDetail } from "../components/ItemDetail";

import { RewardsBadge } from "../components/RewardsBadge";
import "../App.css";
import { Footer } from "../components/Footer";


const Home = () => {
  return (
    <div className="App">
      <header className="header">
        <div
          style={{
            width: 160,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          }}
        >
          EN
        </div>
        <div>SALES BEGIN · FREE SHIPPING ON ALL ORDERS </div>
        <div
          style={{
            width: "14%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            backgroundColor: "#27B03F",
          }}
        >
          Chat with us
        </div>
      </header>
      <SearchHeader />

      {/* <p>path</p> */}
      <div style={{height:60}}>

      </div>
      <ItemDetail />
      <RewardsBadge />
      <Footer />
    </div>
  );
};

export default Home;

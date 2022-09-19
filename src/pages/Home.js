import { SearchHeader } from "../components/SecondHeader";
import { HeroSection } from "../components/HeroSection";

import { RewardsBadge } from "../components/RewardsBadge";
import "../App.css";
import { PopularSection } from "../components/PopularSection";
import { CountrySection } from "../components/CountrySection";
import { OtherCollections } from "../components/OtherCollections";
import { BottomSection } from "../components/BottomSection";
import { Footer } from "../components/Footer";
import { AfterHero } from "../components/AfterHero";



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
      <HeroSection />

      <AfterHero />
      <RewardsBadge />
      <PopularSection />
      <CountrySection />
      <OtherCollections />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default Home;

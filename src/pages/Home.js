
import { HeroSection } from "../components/HeroSection";

import { RewardsBadge } from "../components/RewardsBadge";
import "../App.css";
import { PopularSection } from "../components/PopularSection";
import { CountrySection } from "../components/CountrySection";
import { OtherCollections } from "../components/OtherCollections";
import { BottomSection } from "../components/BottomSection";
import { Footer } from "../components/Footer";
import { AfterHero } from "../components/AfterHero";
import { Layout } from "../components/Layout";



const Home = () => {
  return (
   
      <Layout>
        {/* <SearchHeader /> */}
        <HeroSection />

        <AfterHero />
        <RewardsBadge />
        <PopularSection />
        <CountrySection />
        <OtherCollections />
        <BottomSection />
      </Layout>

  );
};

export default Home;

// import { SearchHeader } from "../components/SearchBar";
import { ItemDetail } from "../components/ItemDetail";
import { Layout } from "../components/Layout";
import { RewardsBadge } from "../components/RewardsBadge";
import "../App.css";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <Layout>
      <ItemDetail />
      <RewardsBadge />
    </Layout>
  );
};

export default Home;

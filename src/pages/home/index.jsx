import CardButton from "../../components/button/card-button";
import TrendButton from "../../components/button/trend-button";
import Hero from "../../components/hero";
import List from "../../components/list";

const Home = () => {
  return (
    <div>
      <Hero />

      <CardButton />
      <TrendButton />

      <List />
    </div>
  );
};

export default Home;

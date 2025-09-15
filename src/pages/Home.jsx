import BestSellerSection from "../components/pages/home/BestSellerSection";
import Companies from "../components/pages/home/Companies";
import ForBeginners from "../components/pages/home/ForBeginners";
import MainSection from "../components/pages/home/MainSection";
import SaidAboutUs from "../components/pages/home/SaidAboutUs";
import SomeInfo from "../components/pages/home/SomeInfo";
import WhyUs from "../components/pages/home/WhyUs";

const Home = () => {
  return (
    <div className="">
      <MainSection />
      <BestSellerSection />
      <ForBeginners />
      <WhyUs />
      <SaidAboutUs />
      <SomeInfo/>
      <Companies/>
    </div>
  );
};

export default Home;

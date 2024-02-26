import Header from "../Layout/Header/Header";
import StarProducts from "./StarProducts";
import Feature from "./Feature";
import Banner from "./Banner";
import Footer from "../Layout/Footer/Footer";
import Slider from "../UI/Carousel/Slider";
import Hero from "./Hero";
import WhyUs from "./WhyUs";
import Filter from "../ProductsPage/Filter";

const HomePage = () => {
  return (
    <>
      <Filter />
      <Header />
      <Hero />
      <StarProducts />
      <Feature />
      <Banner />
      <WhyUs />
      <Slider />
      <Footer />
    </>
  );
};

export default HomePage;

import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import WhyBanner from "./WhyBanner";
import WhyJourney from "./WhyJourney";
import BrandStoryVideo from "./BrandStoryVideo";
import CompanyCulture from "./CompanyCulture";
import Strategy from "./Strategy";
import Partnership from "./Partnership";
import CertificateCarousel from "./CertificateCarousel";

const WhyPage = () => {
  return (
    <>
      <Header />
      <main className="bg-light-grey">
        <WhyBanner />
        <BrandStoryVideo />
        <CompanyCulture />
        <WhyJourney />
        <CertificateCarousel />
        <Strategy />

        <Partnership />
      </main>
      <Footer />
    </>
  );
};

export default WhyPage;

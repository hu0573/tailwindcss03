import Header from "./components/Header";
import SiteBanner from "./components/SiteBanner";
import SectionHeading from "./components/SectionHeading";
import Banner from "./components/Banner";
import Location from "./components/Location";
import DiscountBanner from "./components/DiscountBanner";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <SiteBanner></SiteBanner>
      <SectionHeading></SectionHeading>
      <Banner></Banner>
      <Location></Location>
      <DiscountBanner></DiscountBanner>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}

export default App;

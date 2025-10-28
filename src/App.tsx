import Header from "./components/Header";
import SiteBanner from "./components/SiteBanner";
import SectionHeading from "./components/SectionHeading";
import Banner from "./components/Banner";
import Location from "./components/Location";
import DiscountBanner from "./components/DiscountBanner";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [mode, setMode] = useState<string>("dark");
  const toggleDarkMode = (): void => {
    mode === "dark" ? setMode("") : setMode("dark");
  };
  return (
    <div data-theme={mode}>
      <Header ToggleDarkMode={toggleDarkMode}></Header>
      <SiteBanner></SiteBanner>
      <SectionHeading></SectionHeading>
      <Banner></Banner>
      <Location></Location>
      <DiscountBanner></DiscountBanner>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;

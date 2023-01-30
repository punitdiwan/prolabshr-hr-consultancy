// import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import Ourclients from "../Components/Ourclients";
import Testimonials from "../Components/Testimonials";
import Getintouch from "../Components/Getintouch";
import Welcome from "../Components/Welcome";
import Callnow from "../Components/Callnow";
import About from "../Components/About";
import Ourservice from "../Components/Ourservice";

export default function Home() {
  return (
    <>
      {/* <Layout1 /> */}
      {/* <Header /> */}
      <Navigation />
      {/* <Responsive /> */}
      <Welcome />
      <Callnow />
      <About />
      <Ourservice />
      <Getintouch />
      <Testimonials />
      <Ourclients />
      <Footer />
    </>
  );
}

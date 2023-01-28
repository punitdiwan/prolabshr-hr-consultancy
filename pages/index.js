// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Layout from '../Components/Layout/Layout';
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import Welcome from "./Welcome";
import Callnow from "./Callnow";
import About from "./About";
import Ourservice from "./Ourservice";
import Getintouch from "./Getintouch";
import Testimonials from "./Testimonials";
import Ourclients from "./Ourclients";
// import Responsive from "../Components/Responsive";
// import Layout from "../Components/Layout";

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

// import { ToastProvider } from 'react-toast-notifications/dist/ToastProvider'
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import img from "../../public/images/favicon.ico";

const Layout = () => {
  return (
    <div>
      <Head>
        <title>PROLABS HR</title>
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      {children}
      <ToastProvider>
        <Footer />
      </ToastProvider>
    </div>
  );
};

export default Layout;

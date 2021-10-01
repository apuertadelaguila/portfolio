import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import Script from 'next/script';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Alejandro Puerta</title>
        <meta name="description" content="Portfolio Alejandro Puerta" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
          crossOrigin="anonymous"
        ></Script>
    </>
  );
}

export default Layout;
import "../styles/index.css";
import Layout from "../components/Layout";
import Router from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Router.onRouteChangeComplete = () => {
      document.getElementById("page-top").scrollIntoView(true);
      window.scroll(0, 0);
    };
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

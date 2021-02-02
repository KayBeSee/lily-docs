import "../styles/index.css";
import Layout from "../components/Layout";
import Router from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Router.onRouteChangeComplete = () => {
      console.log("foobar");
      window.scroll(0, 0);
    };

    Router.events.on("routeChangeComplete", () => {
      console.log("foobar2: ", window);
      window.scrollTo(0, 0);
    });
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

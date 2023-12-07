import Layout from "../Components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
}

export default MyApp;

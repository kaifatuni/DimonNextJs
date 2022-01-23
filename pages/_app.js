import "../node_modules/react-modal-video/css/modal-video.min.css";
import "swiper/css/swiper.min.css";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <NavOne/>
    <Component {...pageProps} />
    <Footer />
    </Layout>
  );
}

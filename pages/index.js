import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import Banner2 from "../components/Banner2";
import NewsDetails from "../components/NewsDetails2";
import AA from "../components/AA";



const HomePage = () => (

    <Layout pageTitle="Dimon - React Next App Landing Page Template">
        <NavOne />
        {/* <Banner2/> */}
        <NewsDetails />
        <Footer />
    </Layout>

)

export default HomePage;
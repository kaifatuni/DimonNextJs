import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

export default function Custom404() {
    return (
      <div>
        <section className="kaif-one banner-one" id="banner">
          <span className="banner-one__shape-1"></span>
          <span className="banner-one__shape-2"></span>
          <span className="banner-one__shape-3"></span>
          <span className="banner-one__shape-4"></span>
          <div className="container">
            <div className="kaif-one__carousel">
                <div className="kaif-one__single">
                  <div className="kaif-one__inner">
                    <p>
                      Contact!!!!
                    </p>
                    <h3>404</h3>
                    {/* <span></span>
                    <img
                      src="/assets/images/resources/testi-1-1.png"
                      alt="Awesome Image"
                    /> */}
                  </div>
                </div>
            </div>
          </div>
        </section>
        
      </div>
    )
  }
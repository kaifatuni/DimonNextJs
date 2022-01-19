import React, { useState } from "react";

const Blog = () => {
  return (
    <section className="kaif-one">
      <section className="banner-one" id="banner">
                <span className="banner-one__shape-1"></span>
                <span className="banner-one__shape-2"></span>
                <span className="banner-one__shape-3"></span>
                <span className="banner-one__shape-4"></span>
      <div className="container">
        <div className="kaif-one__carousel">
            <div className="kaif-one__single">
              <div className="kaif-one__inner">
                <p>
                  This is due to their excellent service, competitive
                  pricing and <br /> customer support. It’s throughly
                  refresing to get such a personal <br /> touch. Duis aute
                  irure dolor in reprehenderit.
                </p>
                <h3>Shirley Smith</h3>
                <span>Our Customers</span>
                <img
                  src="/assets/images/resources/testi-1-1.png"
                  alt="Awesome Image"
                />
              </div>
            </div>
        </div>
      </div>
      </section>
    </section>
  );
};
export default Blog;

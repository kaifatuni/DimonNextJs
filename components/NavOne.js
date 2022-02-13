import React,{ Component } from 'react';
import Link from 'next/link';

export default class NavOne extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }
    
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 70) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".menu-toggler");
        let mainNav = document.querySelector(".main-navigation");

        mainNavToggler.addEventListener("click", function () {
            mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
        });
    }

    render(){
        return (

            <header className="site-header site-header__header-one">
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${this.state.sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <a className="navbar-brand" href="/">
                                <img src="/assets/images/resources/logo-dark.png" className="main-logo" width="200"
                                     alt="Awesome Image" />
                            </a>
                            <button className="menu-toggler">
                                <span className="fa fa-bars"></span>
                            </button>
                        </div>
                        <div className="main-navigation">
                            <ul className=" one-page-scroll-menu navigation-box">
                                <li className="current scrollToLink">
                                    <Link href="/"><a>Home</a></Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/"><a>Home 01</a></Link></li>
                                        <li><Link href="/index-2"><a>Home 02</a></Link></li>
                                        <li><a href="#">Header Versions</a>
                                            <ul className="sub-menu">
                                                <li><Link href="/"><a>Header 01</a></Link></li>
                                                <li><Link href="/index-2"><a>Header 02</a></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="scrollToLink">
                                    <Link href="/features"><a>Features</a></Link>
                                </li>
                                <li className="scrollToLink">
                                    <Link href="/team"><a>Team</a></Link>
                                </li>
                                <li className="scrollToLink">
                                    <Link href="/"><a>Blog</a></Link>
                                </li>
                                <li className="scrollToLink">
                                    <Link href="/news"><a>News</a></Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/news"><a>News</a></Link></li>
                                        <li><Link href="/"><a>News Details</a></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="right-side-box">
                            <a className="thm-btn header__cta-btn" href="/about"><span>About</span></a>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
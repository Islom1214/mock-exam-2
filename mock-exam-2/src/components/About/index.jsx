import "./style.scss"
import CarouselComponent from "../common/Carousel"
import CompanyBlog from "./CompanyBlog.jsx"

import Img1 from "../../assets/images/mebel1.jpg"
import Img2 from "../../assets/images/mebel2.jpg"
import Img3 from "../../assets/images/mebel3.jpg"
import Img4 from "../../assets/images/mebel4.jpg"
import Img5 from "../../assets/images/mebel5.jpg"

function About() {
    const images = [Img1, Img2, Img3, Img4, Img5]

    return (
        <div className="about-wrapper">
            <div className="carousel">
                <CarouselComponent images={images} blurred={false}>
                    <div className="Carousel-wrapper">
                        <div className="carousel-content">
                            <h1>Exclusive Deals of</h1>
                            <h1>Furniture <b>Collection</b></h1>
                            <p>Explore different cattalog for our showroom and online service client
                                <br />
                                 happyness for our furniture this</p>
                            <button className="btn-1">Buy Now</button> <button className="btn-2">Explore</button>
                        </div>
                        <div></div>
                    </div>
                </CarouselComponent>
            </div>
            <div className="our-furniture">
                <div className="container">
                    <h1>Why</h1>
                    <h1><b>You Get</b> With</h1>
                    <h1>Our Furniture</h1>
                    <p>More by more profit for you buy the best ,Do your
                        <br />
                        home smart,good, loking mordern
                    </p>
                </div>
                <div className="container">
                    <div className="mini-container"><p>✈</p>  <b>Free Delivery</b></div>
                    <div className="mini-container"><p>24/7</p>  <b>Support 24/7</b></div>
                    <div className="mini-container"><p>©</p>  <b>Warrenty</b></div>
                </div>
            </div>
            <div className="blog-wrapper">
                <h1>New Arrivals</h1>
                <CompanyBlog images={images} />
            </div>
            <div className="special-offer">
                <div></div>
                <div>
                    <h1>Special <b>offer</b></h1>
                    <h1>Furniture</h1>
                    <h1>Sale</h1>
                    <hr width="300px" />
                    <button className="btn-1">Buy Now</button>
                </div>
            </div>
            <div className="popular-products">
                <h1>Popular Products</h1>
                <CompanyBlog />
            </div>
            <div className="clients-review">
                <h1>Clients Review</h1>
                <CompanyBlog />
            </div>
        </div>
    );
}

export default About;
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img
                className="home__images"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81HK1DyQEQL._AC_UY218_.jpg"
                />

                <Product
                    id="1221341"
                    title="OnePlus Nord 5G (Blue Marble, 8GB RAM, 128GB Storage)"
                    price={399}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81G3ERMsRyL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="1232141"
                    title="OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)"
                    price={599}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71ncRs6HzyL._AC_UY218_.jpg"
                />

                <Product
                    id="123341"
                    title="React: Quickstart Step-By-Step Guide To Learning React Javascript Library (React.js, Reactjs, Learning React JS, React Javascript, React Programming)"
                    price={15}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71K-0fZYHTL._AC_UY218_.jpg"
                />
                <Product
                    id="123213"
                    title="Mi Smart Band 4- India's No.1 Fitness Band, Up-to 20 Days Battery Life, Color AMOLED Full-Touch Screen, Waterproof with Music Control and Unlimited Watch Faces"
                    price={100}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41+Y1oz4TML._AC_SR400,600_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="123221341"
                    title="Samsung 80 cm (32 inches) Wondertainment Series HD Ready LED Smart TV UA32TE40AAKXXL (Titan Gray) (2020 model)"
                    price={800}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81cB6pJsTaL._AC_UY218_.jpg"
                />
            </div>
            {/* Product */}

        </div>
    );
}

export default Home;

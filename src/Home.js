import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="23442930"
            title="teelSeries Arctis Nova Pro for Xbox Multi-System Gaming Headset - Premium Hi-Fi Drivers - Hi-Res Audio - 360° Spatial "
            price={146.6}
            rating={4}
            image="https://m.media-amazon.com/images/I/71fz1tjzJUL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="12321341"
            title="Apple 2020 MacBook Air Laptop M1 Chip, 13 Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera "
            price={742.46}
            rating={5}
            image="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Kindle (2022 release) – The lightest and most compact Kindle, now with a 6” 300 ppi high-resolution display "
            price={119.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/714brROA9eL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23485930"
            title="Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency "
            price={129.89}
            rating={4}
            image="https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="27445730"
            title="Linen Pants for Women Summer High Waisted Wide Leg Pants Casual Elastic Waist Palazzo Pants Beach Pants with Pockets "
            price={8.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61kbKWXrppL._AC_UX522_.jpg"
          />
          <Product
            id="27745770"
            title="MEROKEETY Women's Long Sleeve Cable Knit Sweater Open Front Cardigan Button Loose Outerwear "
            price={45.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51VrNZqMuTL._AC_UY500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home
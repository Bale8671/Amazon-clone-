import React from 'react'
import './Home.css'
import Product from "../Product/Product"
function Home() {
    return (
        <div className="home">
          <div className="home_container">
            <img
              className="home_image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
            />
            <div className="home_row">
            <Product
                id="112"
                title="Hisense 58-inch ULED U6 Series Quantum)"
                price={478}
                rating={5}
                image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41-0fDp28qL._AC_SY200_.jpg"
              />
              <Product
                id="1122"
                title="Atomic Habits: An Easy & Proven Way"
                price={11.98}
                rating={5}
                image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81wgcld4wxL._AC_UY218_.jpg"
              />
              <Product
                id="112233"
                title="'Sceptre 24' Professional Thin 75Hz 1080p "
                price={104.99}
                rating={5}
                image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71rXSVqET9L._AC_UY218_.jpg"
              />
            </div>
            <div className="home_row">
              <Product
                id="112244"
                title="EltaMD UV Clear SPF 46 Face Sunscreen,"
                price={39.0}
                rating={4}
                image="https://m.media-amazon.com/images/I/61xlIIwBhyL._AC_UL320_.jpg"
              />
              <Product
                id="112255"
                title="Crown Sporting Goods Set of 2 Body Sculpting Hand Weights - Soft Neoprene Coated Dumbbell Set - Supplies for Exercise, Workout, Weight Loss, Body Building - for Men, Women, Seniors, Teens, and Youth
     "
                price={14.39}
                rating={3}
                image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61673j3zNRL._AC_SX569_PIcountsize-2,TopRight,0,0_SH20_.jpg"
              />
              <Product
                id="112266"
                title="HoMedics Indoor 3-Tier Relaxation Tabletop Fountain, EnviraScape Silver Springs "
                price={25.0}
                rating={5}
                image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71gvpZYgPxS._AC_SX522_.jpg"
              />
              <Product
                id="112277"
                title="Withings Steel HR Sport - Multisport activity and sleep tracking, notifications "
                price={119.0}
                rating={4}
                image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81MQG9RCEJL._AC_UY218_.jpg"
              />
            </div>
            <div className="home_row">
              <Product
                id="112288"
                title="Novelty Gaming Hoodie Pwned "
                price={27.99}
                rating={2}
                image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71uBGIpLrOL._AC_UL320_.jpg"
              />
              <Product
                id="112299"
                title="Corner Shelf, Greenco 5 Tier Shelves  , Espresso Finish "
                price={30.99}
                rating={3}
                image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/718cQsxYvQL._AC_SX679_.jpg"
              />
              <Product
                id="112200"
                title="High-Back Gaming Chair Men (White) "
                price={54.01}
                rating={5}
                image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61t4mpabO+L._AC_SL1500_.jpg"
              />
            </div>
          </div>
        </div>
      )
}

export default Home
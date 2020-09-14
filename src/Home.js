import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row" >
                    <Product
                        id="1212132" 
                        title="The lean startup" 
                        price={19.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        rating={4}
                    />
                    <Product
                        id="1212132" 
                        title="ASUS TUF Gaming FX505DV" 
                        price={500.99} 
                        image='https://www.asus.com/media/global/products/R0aLUBgprfy023VC/P_setting_xxx_0_90_end_300.png'
                        rating={5}
                    />
                    {/* Product components */}
                </div>
                <div className="home__row" >
                    <Product
                        id="1212132" 
                        title="Amazon.in: Buy Epson L130 Single-Function Ink Tank Colour Printer Online at  Low Prices in India | Epson Reviews & Ratings" 
                        price={500.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/71FDAbUf9VL._SX425_.jpg'
                        rating={5}
                    />
                    <Product
                        id="1212132" 
                        title="The lean startup" 
                        price={19.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        rating={4}
                    />
                    <Product
                        id="1212132" 
                        title="ASUS TUF Gaming FX505DV" 
                        price={500.99} 
                        image='https://cf.shopee.co.id/file/75bc51ce590714cbb9fb1298d32cb1a2'
                        rating={5}
                    />
                </div>
                <div className="home__row" >
                    <Product
                        id="1212132" 
                        title="Microsoft Xbox One X 1Tb Console With Wireless Controller: Xbox One X  Enhanced, Hdr, Native 4K, Ultra Hd (Discontinued)" 
                        price={19.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/61ux1cU49XL._SX385_.jpg'
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

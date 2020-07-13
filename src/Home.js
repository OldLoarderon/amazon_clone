import React from 'react';
import Product from './Product';
import './Home.css';


function Home() {
    return (
        <div className="home">
            <img className="home__image" src="
            https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

        <Product
            id="1235123"
            title="Clean Code"
            price={11}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L._SX258_BO1,204,203,200_.jpg"
        />
        
        
        
        
        </div>
    );
    
}

export default Home;

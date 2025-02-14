import React from "react";
import Hero from "./Hero";
{/*import Categories from "./Categories";
import Banner from "./Banner"; */}
import PromoBanner from "./PromoBanner";


const Home = () => {
    return (
        <main>
        <Hero/>
         {/* <Categories/> */}
        <PromoBanner/>
        {/*  <Banner/> */}
        </main>
    );
};

export default Home;
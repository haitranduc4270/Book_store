import React from "react";
import Subscribe from "~/layouts/components/HomeLayout/Subscribe";
import Testimonials from "~/layouts/components/HomeLayout/Testimonials";
import TopCategory from "~/layouts/components/HomeLayout/TopCategory";
import TopPopular from "~/layouts/components/HomeLayout/TopPopular";
import Wellcome from "~/layouts/components/HomeLayout/Wellcome";
import Slider from "~/layouts/Slider";
import "./Home.scss";

const Home = () => {
    return (
        <div className="homepage">
            <Slider />
            <Wellcome />
            <TopCategory />
            <TopPopular />
            <Testimonials />
            <Subscribe />
        </div>
    );
};

export default Home;

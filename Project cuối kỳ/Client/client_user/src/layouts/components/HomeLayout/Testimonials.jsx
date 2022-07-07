import React from "react";
import Slider from "react-slick";

import "./HomeLayout.scss";
import images from "~/assets/images";
import HeadHomeLayout from "~/components/HeadHomeLayout";

const Testimonials = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
    };

    return (
        <div className="testimonials_wrap">
            <div className="grid wide">
                <HeadHomeLayout
                    whiteColor
                    title="Our Testimonials"
                    slogan="What our clients say about the books reviews and comments"
                />

                <div className="list">
                    <Slider {...settings}>
                        <div className="item">
                            <section className="item_block">
                                <p className="item_text">
                                    You have great prices and the books are in
                                    the shape as stated. Although it takes so
                                    long for them to get to their destination. I
                                    have been ordering for years and get great
                                    books in the shape said.
                                </p>
                            </section>
                            <img
                                src={images.testimonials1}
                                alt=""
                                className="item_img"
                            />
                            <p className="item_name">Jenifer Robbert</p>
                            <p className="item_author">Author</p>
                        </div>
                        <div className="item">
                            <section className="item_block">
                                <p className="item_text">
                                    You have great prices and the books are in
                                    the shape as stated. Although it takes so
                                    long for them to get to their destination. I
                                    have been ordering for years and get great
                                    books in the shape said.
                                </p>
                            </section>
                            <img
                                src={images.testimonials1}
                                alt=""
                                className="item_img"
                            />
                            <p className="item_name">Jenifer Robbert</p>
                            <p className="item_author">Author</p>
                        </div>
                        <div className="item">
                            <section className="item_block">
                                <p className="item_text">
                                    You have great prices and the books are in
                                    the shape as stated. Although it takes so
                                    long for them to get to their destination. I
                                    have been ordering for years and get great
                                    books in the shape said.
                                </p>
                            </section>
                            <img
                                src={images.testimonials1}
                                alt=""
                                className="item_img"
                            />
                            <p className="item_name">Jenifer Robbert</p>
                            <p className="item_author">Author</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

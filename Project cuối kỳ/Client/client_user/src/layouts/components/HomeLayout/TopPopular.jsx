import React from "react";
import { Link } from "react-router-dom";
import HeadHomeLayout from "~/components/HeadHomeLayout";
import "./HomeLayout.scss";
import images from "~/assets/images";

const TopPopular = () => {
    return (
        <div className="topPopular_wrap">
            <div className="grid wide">
                <HeadHomeLayout
                    title="Most Popular Books"
                    slogan="The Most Popular Books Today are available in Book Library"
                />

                <div className="book">
                    <div className="book_detail">
                        <img
                            src={images.book1}
                            className="img"
                            alt="Ảnh minh họa"
                        />
                        <div className="content">
                            <h1 className="name">ENGAGING IMAGINATION</h1>
                            <h2 className="author">Gillian Judson</h2>
                            <p className="description">
                                When asked what they want colleges to emphasize
                                most, employers didn’t put science, computing,
                                math, or business management first. According to
                                2013 employer survey, 95% of employers give
                                hiring preference to college graduates with
                                skills that will enable them to contribute to
                                innovation in the workplace. that will enable
                                them to contribute to innovation in the
                                workplace in the city town of the lost vallies.
                            </p>
                            <div className="wrap">
                                <h3 className="price">$245</h3>
                                <Link to="/book/:100" className="link">
                                    See More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="book_list">
                        <div className="book_item">
                            <img
                                src={images.book1}
                                className="img"
                                alt="Ảnh minh họa"
                            />
                        </div>
                        <div className="book_item">
                            <img
                                src={images.book1}
                                className="img"
                                alt="Ảnh minh họa"
                            />
                        </div>
                        <div className="book_item">
                            <img
                                src={images.book1}
                                className="img"
                                alt="Ảnh minh họa"
                            />
                        </div>
                        <div className="book_item">
                            <img
                                src={images.book1}
                                className="img"
                                alt="Ảnh minh họa"
                            />
                        </div>
                        <div className="book_item">
                            <img
                                src={images.book1}
                                className="img"
                                alt="Ảnh minh họa"
                            />
                        </div>
                        <div className="book_item">
                            <img
                                src={images.book1}
                                className="img"
                                alt="Ảnh minh họa"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopPopular;

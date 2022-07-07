import React, { useState } from "react";
import Slider from "react-slick";

import "./HomeLayout.scss";
import HeadHomeLayout from "~/components/HeadHomeLayout";
import {
    HiOutlineArrowNarrowLeft,
    HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import BookItem from "~/components/BookItem";

const HandleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <HiOutlineArrowNarrowRight
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

const HandlePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <HiOutlineArrowNarrowLeft
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

const TopCategory = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <HandleNextArrow />,
        prevArrow: <HandlePrevArrow />,
    };

    const [typeBookShow, setTypeBookShow] = useState(0);

    return (
        <div className="topCategory_wrap">
            <div className="grid wide">
                <HeadHomeLayout
                    whiteColor
                    title="Our Top Categories"
                    slogan="Here are some of the Top Categories of the Books Available."
                />

                <div className="type_wrap">
                    <ul className="list">
                        <li
                            className="item active"
                            onClick={() => setTypeBookShow(0)}
                        >
                            Fantasy
                        </li>
                        <li className="item" onClick={() => setTypeBookShow(1)}>
                            Mystery
                        </li>
                        <li className="item" onClick={() => setTypeBookShow(2)}>
                            Thriller
                        </li>
                        <li className="item" onClick={() => setTypeBookShow(3)}>
                            Dystopian
                        </li>
                        <li className="item" onClick={() => setTypeBookShow(4)}>
                            Contemporary
                        </li>
                        <li className="item" onClick={() => setTypeBookShow(5)}>
                            Sci-Fi
                        </li>
                    </ul>
                </div>
                <div className="book_wrap">
                    <div className="list active">
                        <Slider {...settings}>
                            <BookItem />
                            <BookItem />
                            <BookItem />
                            <BookItem />
                            <BookItem />
                        </Slider>
                    </div>

                    {/* <div className="list active">
                        <Slider {...settings}>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">
                                        Nobita Lorem, ipsum dolor sit amet
                                        consectetur adipisicing elit. Nostrum,
                                        voluptatum sunt obcaecati, dolor eveniet
                                        quae maiores molestiae nemo, quia animi
                                        consequuntur laboriosam! Veritatis
                                        pariatur, ab dignissimos consectetur
                                        reiciendis fugiat quod?
                                    </p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">Nobita</p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">Nobita</p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">Nobita</p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">Nobita</p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="list active">
                        <Slider {...settings}>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">
                                        Nobita Lorem, ipsum dolor sit amet
                                        consectetur adipisicing elit. Nostrum,
                                        voluptatum sunt obcaecati, dolor eveniet
                                        quae maiores molestiae nemo, quia animi
                                        consequuntur laboriosam! Veritatis
                                        pariatur, ab dignissimos consectetur
                                        reiciendis fugiat quod?
                                    </p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">Nobita</p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">Nobita</p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">Nobita</p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">Nobita</p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="list active">
                        <Slider {...settings}>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">
                                        Nobita Lorem, ipsum dolor sit amet
                                        consectetur adipisicing elit. Nostrum,
                                        voluptatum sunt obcaecati, dolor eveniet
                                        quae maiores molestiae nemo, quia animi
                                        consequuntur laboriosam! Veritatis
                                        pariatur, ab dignissimos consectetur
                                        reiciendis fugiat quod?
                                    </p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">Nobita</p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">Nobita</p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">Nobita</p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap_show">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <p className="name">Nobita</p>
                                </div>
                                <div className="wrap_hover">
                                    <p className="name">Doraemon</p>
                                    <p className="author">Toyota</p>
                                    <button className="btn">Add to Cart</button>
                                </div>
                            </div>
                        </Slider>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default TopCategory;

import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

import HeadContentPage from "~/components/HeadContentPage";
import images from "~/assets/images";
import "./OurBookDetail.scss";
import Button from "~/components/Button";

const OurBookDetail = () => {
    return (
        <div className="ourBookDetail_wrap">
            <HeadContentPage link="Book Detail" />

            <div className="container">
                <img className="img" src={images.book1} alt="BookImage" />
                <div className="content_wrap">
                    <h1 className="name">All Good News</h1>
                    <ul className="rating_list">
                        <li className="rating_item">
                            <BsStarFill className="icon" />
                        </li>
                        <li className="rating_item">
                            <BsStarFill className="icon" />
                        </li>
                        <li className="rating_item">
                            <BsStarFill className="icon" />
                        </li>
                        <li className="rating_item">
                            <BsStarFill className="icon" />
                        </li>
                        <li className="rating_item">
                            <BsStarHalf className="icon" />
                        </li>
                    </ul>

                    <p className="typebook">
                        Typebook: <span>Romatic</span>
                    </p>
                    <p className="author">
                        Author: <span>Steve Auth</span>
                    </p>

                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt id rerum porro sed aperiam sunt, dolor
                        quibusdam aut illo pariatur animi repudiandae optio
                        maiores perspiciatis reprehenderit expedita quasi et.
                        Nemo? Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. In repellendus voluptatibus accusantium hic quam
                        itaque fugit nesciunt nobis? Ad eligendi vero molestiae
                        vel, nihil laboriosam distinctio excepturi sed a
                        possimus? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nostrum, impedit distinctio molestias
                        quia eligendi tenetur consequuntur modi officia
                        explicabo dignissimos velit perferendis, odit nemo
                        numquam accusantium cumque quisquam quasi alias.
                    </p>

                    <div className="price_action">
                        <p className="price">$15.63</p>

                        <div className="action">
                            <ul className="quantity_wrap">
                                <li className="disabled">
                                    <p>-</p>
                                </li>
                                <li>
                                    <p>1</p>
                                </li>
                                <li>
                                    <p>+</p>
                                </li>
                            </ul>
                            {/* <button className="add_cart">Add to cart</button> */}
                            <Button className="subscribe_btn submit_mess">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBookDetail;

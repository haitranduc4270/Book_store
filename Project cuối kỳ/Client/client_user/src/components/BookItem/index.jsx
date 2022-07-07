import React from "react";
import Button from "../Button";

import images from "~/assets/images";
import "./BookItem.scss";

const BookItem = () => {
    return (
        <div className="bookItem_wrap">
            <div className="wrap_show">
                <img src={images.book1} alt="" className="img" />
                <p className="name">
                    Nobita Lorem ipsum dolor sit amet, consectetur adip
                </p>
            </div>
            <div className="wrap_hover">
                <p className="name">The Winning Story</p>
                <p className="author">Helen Fielding</p>
                <p className="price">$777.75</p>
                <Button className="custom">Add to Cart</Button>
                <Button to=":123" className="custom">
                    Book Detail
                </Button>
            </div>
        </div>
    );
};

export default BookItem;

import React from "react";

import Button from "../Button";
import "./BookItem.scss";

const BookItem = ({ data }) => {
    const { id, name, img, author, price } = data;
    return (
        <div className="bookItem_wrap">
            <div className="wrap_show">
                <img src={img} alt="" className="img" />
                <p className="name">{name}</p>
            </div>
            <div className="wrap_hover">
                <p className="name">{name}</p>
                <p className="author">{author}</p>
                <p className="price">{price}</p>
                <Button className="custom">Add to Cart</Button>
                <Button to={`/book/:${id}`} className="custom">
                    Book Detail
                </Button>
            </div>
        </div>
    );
};

export default BookItem;

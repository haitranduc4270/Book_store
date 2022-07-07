import React from "react";
import BookItem from "~/components/BookItem";
import HeadContentPage from "~/components/HeadContentPage";
import "./OurBook.scss";

const OurBook = () => {
    return (
        <div className="ourBook_page">
            <HeadContentPage link="Our book" />

            <div className="container">
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
            </div>
        </div>
    );
};

export default OurBook;

import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import request from "~/utils/httpRequest";
import BookItem from "~/components/BookItem";
import HeadContentPage from "~/components/HeadContentPage";
import Spinner from "~/components/Spinner";
import "./OurBook.scss";

// Set number book to show screen in paginate
function PaginatedBooks({ itemsPerPage, data }) {
    const [currentBooks, setCurrentBooks] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentBooks(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [data, itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            {/* Book list */}
            <div className="container">
                {currentBooks &&
                    currentBooks.map((data, index) => {
                        return <BookItem key={index} data={data} />;
                    })}
            </div>

            {/* Pagitantion */}
            <ReactPaginate
                breakLabel="..."
                nextLabel=">>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<<"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

const OurBook = () => {
    const [loading, setLoading] = useState(true);
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        request
            .get("books")
            .then((res) => {
                setLoading(false);
                setBooksData(res.data);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="ourBook_page">
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <HeadContentPage link="Our book" />
                    {/* itemsPerPage: number book in 1 page */}
                    <PaginatedBooks itemsPerPage={12} data={booksData} />
                </>
            )}
        </div>
    );
};

export default OurBook;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "~/components/Spinner";
import config from "~/Config";
import Subscribe from "~/layouts/components/HomeLayout/Subscribe";
import Testimonials from "~/layouts/components/HomeLayout/Testimonials";
import TopCategory from "~/layouts/components/HomeLayout/TopCategory";
import TopPopular from "~/layouts/components/HomeLayout/TopPopular";
import Wellcome from "~/layouts/components/HomeLayout/Wellcome";
import Slider from "~/layouts/Slider";
import request from "~/utils/httpRequest";
import "./Home.scss";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [typeBooksData, setTypeBooksData] = useState([]);
    const [popularBooksData, setPopularBooksData] = useState([]);

    useEffect(() => {
        // setLoading(true);

        const typeBooks = [];
        const topPopular = request.get("bookType2");
        config.typeBooks.forEach((typeBook, index) => {
            typeBooks[index] = request.get("bookType1");
        });

        axios
            .all([...typeBooks, topPopular])
            .then(
                axios.spread((...allBookData) => {
                    let newData = allBookData.map((bookData) => {
                        return bookData.data;
                    });
                    let popularData = newData.pop();

                    setTypeBooksData(newData);
                    setPopularBooksData(popularData);

                    setLoading(false);
                })
            )
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="homepage">
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <Slider />
                    <Wellcome />
                    <TopCategory data={typeBooksData} />
                    <TopPopular data={popularBooksData} />
                    <Testimonials />
                    <Subscribe />
                </>
            )}
        </div>
    );
};

export default Home;

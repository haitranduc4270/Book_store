import React from "react";
import "./Search.scss";

const Search = ({ style }) => {
    const classes = "search_wrap " + style;
    return (
        <div className={classes}>
            <form action="" className="grid wide search_form">
                <input
                    type="text"
                    placeholder="Book Name"
                    className="search_name search_input"
                />

                <select
                    name="bookType"
                    defaultValue={"Romance"}
                    className="search_type search_input"
                >
                    <option value="volvo">Fantasy</option>
                    <option value="saab">Sci-Fi</option>
                    <option value="mercedes">Mystery</option>
                    <option value="audi">Thriller</option>
                    <option value="saab">Romance</option>
                    <option value="mercedes">Westerns</option>
                    <option value="audi">Dystopian</option>
                    <option value="audi">Contemporary</option>
                </select>
                <input
                    type="text"
                    placeholder="Book Author"
                    className="search_author search_input"
                />

                <input
                    type="submit"
                    className="search_button"
                    value="Search Book"
                />
            </form>
        </div>
    );
};

export default Search;

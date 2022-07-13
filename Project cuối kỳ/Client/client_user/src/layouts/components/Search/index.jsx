import React from "react";
import { useFormik } from "formik";
import Select from "react-select";

import "./Search.scss";
import config from "~/Config";

const customStyles = {
    control: (base) => ({
        ...base,
        border: "0px solid black",
        borderRadius: "0",
        height: "35px",
        minHeight: "35px",
        boxShadow: "none",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        "&:hover": {
            border: "0px solid black",
        },
    }),

    dropdownIndicator: (base) => ({
        ...base,
        color: "#999",
    }),
    menu: (base) => ({
        ...base,
        borderRadius: "0",
    }),
    option: (base, state) => ({
        ...base,
        cursor: "pointer",
        backgroundColor: state.isSelected ? "#f6b93b" : "transparent",
        "&:hover": {
            backgroundColor: state.isSelected
                ? "#f6b93b"
                : "hsla(40, 91%, 60%, 30%)",
        },
    }),
};

const Search = ({ style }) => {
    const classes = "search_wrap " + style;

    const formik = useFormik({
        initialValues: {
            bookName: "",
            bookAuthor: "",
            bookType: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const options = config.typeBooks.map((type) => {
        return {
            value: type,
            label: type,
        };
    });

    const defaultValue = (options, value) => {
        return options
            ? options.find((option) => options.value === value)
            : "Book Type:";
    };

    return (
        <div className={classes}>
            <form
                action=""
                className="grid wide search_form"
                onSubmit={formik.handleSubmit}
            >
                <input
                    type="text"
                    name="bookName"
                    placeholder="Book Name"
                    value={formik.values.bookName}
                    onChange={formik.handleChange}
                    className="search_name search_input"
                />

                <Select
                    name="bookType"
                    className="search_type search_input"
                    styles={customStyles}
                    value={defaultValue(options, formik.values.bookType)}
                    onChange={(value) =>
                        formik.setFieldValue("bookType", value.value)
                    }
                    options={options}
                    placeholder={"Book Type:"}
                />

                <input
                    type="text"
                    name="bookAuthor"
                    placeholder="Book Author"
                    value={formik.values.bookAuthor}
                    onChange={formik.handleChange}
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

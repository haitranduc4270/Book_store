import React, { useContext, useEffect } from "react";
import StickyBox from "react-sticky-box";
import { TbShoppingCartDiscount } from "react-icons/tb";

import { UserContext } from "~/contexts/UserContext";
import "./CartOrder.scss";
import images from "~/assets/images";
import Spinner from "~/components/Spinner";
import { Link } from "react-router-dom";

const CartOrder = () => {
    // // Context:
    // const {
    //     cartState: { carts, cartsLoading },
    //     getCarts,
    // } = useContext(CartContext);

    // useEffect(() => {
    //     getCarts();
    // }, []);

    let content;
    // if (cartsLoading) {
    //     content = <Spinner />;
    //     // } else if (carts.length === 0) {
    //     //     content = (
    //     //         <div className="empty_wrap">
    //     //             <TbShoppingCartDiscount className="icon" />
    //     //             <h1>Your Cart is Empty</h1>
    //     //             <h2>Add something to make me happy :)</h2>
    //     //             <Link to="/" className="back_home--btn">
    //     //                 CONTINUE BUY BOOK
    //     //             </Link>
    //     //         </div>
    //     //     );
    // } else {
    content = (
        <>
            <h1 className="head">
                Cart:{" "}
                {/* <span className="quantity">({carts.length} books)</span> */}
            </h1>
            <div className="container">
                <div className="book_list">
                    {" "}
                    <div className="book_item">
                        <img src={images.book1} alt="" className="img" />
                        <div className="info">
                            <h1 className="name">Life is the trip</h1>
                            <p className="author">
                                Author: <span>Peter Packer</span>
                            </p>
                            <p className="type">
                                Book Type: <span>Children</span>
                            </p>
                            <button className="delete_btn">Delete</button>
                        </div>
                        <div className="price_quantity">
                            <p className="price">19.99$</p>
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
                        </div>
                    </div>
                    {/* {carts.map((cart) => {
                            return (
                                <div className="book_item">
                                    <img
                                        src={images.book1}
                                        alt=""
                                        className="img"
                                    />
                                    <div className="info">
                                        <h1 className="name">
                                            Life is the trip
                                        </h1>
                                        <p className="author">
                                            Author: <span>Peter Packer</span>
                                        </p>
                                        <p className="type">
                                            Book Type: <span>Children</span>
                                        </p>
                                        <button className="delete_btn">
                                            Delete
                                        </button>
                                    </div>
                                    <div className="price_quantity">
                                        <p className="price">19.99$</p>
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
                                    </div>
                                </div>
                            );
                        })} */}
                </div>

                {/* Vị trí cách top 143.6px = $head + .head>.quantity */}
                <StickyBox offsetTop={143.6} offsetBottom={20}>
                    <div className="pay_wrap">
                        <div className="info">
                            <div className="info_item">
                                <p className="title">Custom:</p>
                                <input
                                    type="text"
                                    placeholder="Customer name"
                                    defaultValue="Nguyen Phuong Nam"
                                    name=""
                                    id=""
                                />
                            </div>
                            <div className="info_item">
                                <p className="title">Delivery location:</p>
                                <input
                                    type="text"
                                    placeholder="Customer name"
                                    defaultValue="1 Dai Co Viet, Hai Ba Trung, Ha Noi"
                                    name=""
                                    id=""
                                />
                            </div>
                        </div>
                        <div className="total">
                            <h3>Total:</h3>
                            <h3 className="price">59.97$</h3>
                        </div>
                        <button className="order_btn">Order</button>
                    </div>
                </StickyBox>
            </div>
        </>
    );
    // }

    return <div className="cartOrder_wrap">{content}</div>;
};

export default CartOrder;

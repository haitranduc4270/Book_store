import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import HeadContentPage from "~/components/HeadContentPage";
import "./Contact.scss";
import Button from "~/components/Button";

const Contact = () => {
    return (
        <div className="contact_page">
            <HeadContentPage link="Contact" />

            <div className="content">
                <div className="input_wrap">
                    <div className="info">
                        <div className="input_text-wrap">
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                placeholder="Name *"
                                className="input_fild"
                            />
                        </div>
                        <div className="input_text-wrap">
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                placeholder="Email *"
                                className="input_fild"
                            />
                        </div>
                        <div className="input_text-wrap">
                            <label htmlFor="">Phone</label>
                            <input
                                type="text"
                                placeholder="Phone *"
                                className="input_fild"
                            />
                        </div>
                    </div>
                    <div className="input_text-wrap">
                        <label htmlFor="">Message</label>
                        <textarea
                            type="text"
                            placeholder="add to your message"
                        />
                    </div>
                    <Button className="subscribe_btn submit_mess">
                        Submit Message
                    </Button>
                </div>
                <div className="contact_wrap">
                    <div className="title ">
                        <h1>GET IN TOUCH</h1>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident
                        </p>
                    </div>
                    <div className="title ">
                        <h1>INFORMATION</h1>

                        <ul>
                            <li>
                                <FaMapMarkerAlt className="icon" />
                                <p>1 Dai Co Viet, Hai Ba Trung, Ha Noi</p>
                            </li>
                            <li>
                                <BsTelephoneFill className="icon" />
                                <p>(25) 82 800 80</p>
                            </li>
                            <li>
                                <MdEmail className="icon" />
                                <p>poplibrary@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

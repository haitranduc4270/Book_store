import React from "react";
import { GrClose } from "react-icons/gr";

import "./Dialog.scss";

const Dialog = ({ handleDialog }) => {
    return (
        <div className="dialog_wrap">
            <div className="dialog">
                <div className="dialog_header">
                    <h5>Send Email</h5>
                    <GrClose
                        className="icon"
                        onClick={() => handleDialog(false)}
                    />
                </div>
                <div className="dialog_body">
                    <p>Send email successfull!</p>
                </div>
                <div className="dialog_footer">
                    <button type="button" onClick={() => handleDialog(false)}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;

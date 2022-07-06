import React from "react";

const Progressbar = (props) => {
    return (
        <div className="progress" style={{ height: props.height + "px" }}>
            <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: props.width + "%" }}
                aria-valuenow={props.width}
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
    );
};

export default Progressbar;

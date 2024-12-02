import classNames from "classnames";
import React from "react";
import "./Button.scss";

const Button = ({ children, size, color, outline }) => {
    return (
        <button className={classNames("Button", size, color, { outline })}>
            Button
        </button>
    );
};

Button.defaultProps = {
    size: "medium",
    color: "black",
};
export default Button;
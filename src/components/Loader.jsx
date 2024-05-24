import React from "react";
import "./Loader.css"; // Import your CSS file

const Loader = () => {
    return (
        <div className="loader-container">
            <img
                className="loader-img"
                width={100}
                height={100}
                alt="Loading..."
                src="/loader.svg"
            />
        </div>
    );
};

export default Loader;

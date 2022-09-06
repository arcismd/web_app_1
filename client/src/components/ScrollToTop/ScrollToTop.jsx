import React, { useState, useEffect } from "react";

import './index.scss'
import logo from '../../images/mainpage/up-arrow.png'
import mess from '../../images/mainpage/messenger.png'

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <img src={logo}
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}{" "}
            <div className="fb-icon-position fb-icon-style">
                <img src={mess} />
            </div>
        </div>
    );
};
export default ScrollToTop;
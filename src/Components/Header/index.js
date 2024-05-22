import React from "react";
import "./header.css";
import { PiAirplaneTakeoffLight } from "react-icons/pi";

export function Logo(){
    return (
        <div className="header-logo">
            <PiAirplaneTakeoffLight className="logo-img"/>
            <div className="logo-title"><span className="logo-name">Travel</span> Quest</div>
        </div>
    );
}
const Header = () => {
    return(
        <div className="header">
            <div className="header-title">
                {Logo()}
                <div className="vertical-bar"></div>
                <div className="header-text">Private tailor-made journeys of a lifetime</div>
            </div>
            <div className="header-contact">
                <div className="constact-number">1 888 263 2574</div>
                <button type="submit" className="btn">START PLANNING</button>
            </div>
        </div>
    )
}
export default Header;
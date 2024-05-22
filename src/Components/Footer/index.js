import React from "react";
import "./footer.css";
import { Logo } from "../Header";
const Footer = () => {
    return(
        <div className="footer">
                <div className="footer-content">
                    <Logo/>
                    <div className="socail-media">
                        <img src="fb.png" alt=""/>
                        <img src="tw.png" alt=""/>
                        <img src="yt.png" alt=""/>
                    </div>
                </div>
            <div className="copy-right">Copyright ©2024 Travel Quest.com. All Rights Reserved</div>
        </div>
       
    )
}
export default Footer;
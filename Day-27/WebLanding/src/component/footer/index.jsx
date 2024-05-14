import React from "react";
import './style.css';
import logo from "../navbar/fav1.png";

const Footer = () => {

    return (
        <>
        <section id="ContactUs" className="contact">
            <div className="container">
                <div className="footer">
                    <div className="logofoot">
                        <div><img src={logo} alt="" /></div>
                        <div><h2>PAL.21 COFFEE</h2>
                        <p>
                            Nikmati tempat yang nyaman dan coffee hangat.
                        </p></div>
                        </div>
                    <div className="service">
                        <h2>
                            Fasilitas dan Layanan
                        </h2>
                        <ul>
                            <li>Barbershop</li>
                            <li>Vip Room</li>
                            <li>Smooking Room</li>
                            <li>Live Music</li>
                            <li>Outdoor Area</li>
                            <li>Free WIfi</li>
                            <li>Nobar Event</li>
                        </ul>
                    </div>
                    <div className="kontak"></div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer;
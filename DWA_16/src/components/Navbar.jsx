/* eslint-disable no-unused-vars */
import React from "react"
import airbnbLogo from "../assets/airbnbLogo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={airbnbLogo} className="nav--logo" />
        </nav>
    )
}
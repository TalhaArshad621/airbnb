import React from "react";
// import HeroImg from '../images/hero-img.png'

export default function Hero() {
    return (
        <section className="hero--section">
            <img className="hero--img" src='images/hero-img.png' />
            <h1 className="hero--heading">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )   
}
import React from "react";
export default function Card(props) {
    console.log(props);
    let bagdeText;
    if (props.openSpots === 0) {
        bagdeText = "SOLD OUT"
    } else if (props.location == "Online") {
        bagdeText = "ONLINE"
    }
    return (
            <div className="card">
            { bagdeText && <div className="card--badge">{bagdeText}</div>}
                <img className="card--img" src={`../images/${props.coverImg}`} />
                <div className="rating--section">
                    <img className="rating" src="images/Star.png" />
                    <span>{props.stats.rating} </span>
                    <span className="gray"> ({props.stats.reviewCount}) .</span>
                    <span className="gray">{props.location}</span>
                </div>
                <p className="card--description">{props.title}</p>
                <p className="card--price"> <span className="bold">From ${props.price}</span> / person</p>
            </div>
    )
}
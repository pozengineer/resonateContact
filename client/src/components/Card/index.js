import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div> {props.id} </div>
            <div> {props.name} </div>
            <div> {props.company} </div>
            <div> {props.city} </div>
            <div> {props.phone} </div>
            <div> {props.email} </div>
        </div>
    );
}

export default Card;
import React from "react";
import './Card.css'
import BuyButton from "../BuyButton/BuyButton";

export default function Card({titulo, descricao, valor, foto}) {
    return (
        <div className="card">
            <div>
                <div id="item-image">
                    <img src={foto}/>
                </div>
                <div id="card-content">
                    <h3>{titulo}</h3>
                    <p>{descricao}</p>
                    <a>R$ {valor}</a>
                    <BuyButton/>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import './Button.css'

export default function Button({texto}) {
    return (
        <div className="button">
            {texto}
        </div>
    )
}
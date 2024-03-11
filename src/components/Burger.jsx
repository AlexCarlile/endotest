import React, { useState } from 'react';

export default function Burger({active, setActive, props}) {
    const [burgerActive, setBurgerActive] = useState(false);
    const click = props;

    return (
        <button className={active ? "burger active btn-reset" : "burger btn-reset"} onClick={click.action}>
            <span className="burger-line"></span>
        </button>
        )
}
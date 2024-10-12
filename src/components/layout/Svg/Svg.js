import React from 'react'
import sprite from "../../../assets/svg/sprite.svg"

const Svg = ({id,...args}) => {
    return (
        <svg{...args}>
            <use href={`${sprite}#${id}`} />
        </svg>
    )
}

export default Svg
import React from 'react'
const Banner = ({ name, discount, link }) => {
    return (
        <div >
            <h3>Hello</h3>
            <h2>{name}</h2>
            <p>get free discount for every $<span>{discount}</span>purchase</p>
            <a href={link}> LEARN MORE</a>
        </div>
    )
}

export default Banner

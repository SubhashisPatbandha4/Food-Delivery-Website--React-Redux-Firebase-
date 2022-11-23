import React from 'react'

const Banner = ({ name, discount, link }) => {
    return (
        <div>
            <h1>Hello,<strong>{name}</strong></h1>

            <p>get free discount for every $<span>{discount}</span> purchase</p>
            <div style={{ marginTop:"1rem"}}>

                <a className="link" href={link}> Learn More</a>
            </div>
        </div>
    )
}

export default Banner
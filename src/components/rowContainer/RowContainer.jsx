import React from 'react'
import MenuCard from './MenuCard'
import "./rowContainer.css"
import dish1 from "../../Assets/logo.png"

const RowContainer = () => {
    return (
        <div className='rowContainer'>
            <MenuCard img={dish1} name={" burger"} />
            <MenuCard img={dish1} name={" burger"} />

        </div>
    )
}

export default RowContainer

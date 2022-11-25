import React, { useEffect } from 'react'
import MenuCard from './MenuCard'
import "./rowContainer.css"

import { MenuItems, Items } from "../../components/Data"


const RowContainer = (props) => {




    useEffect(() => {
        function setMenuCardActive() {
            menuCards.forEach((n) => n.classList.remove("active"))
            this.classList.add("active");


        }
        const menuCards = document.querySelector(".rowContainer").querySelectorAll(".rowMenuCard")
        menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive))

    }, []);
    return (
        <div className='rowContainer'>
            {
                MenuItems.map((data) => {
                    return (
                        <div key={data.id}>

                            <MenuCard itemId={data.itemId} img={data.imgSrc} name={data.name} isActive={data.id === 1 ? true : false} getProductType={props.getProductType} />
                        </div>
                    )
                })
            }



        </div>
    )
}

export default RowContainer

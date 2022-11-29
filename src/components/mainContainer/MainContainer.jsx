import React from 'react'
import Banner from '../banner/Banner'
import BannerPic from "../../Assets/banner.jpg"
import "./mainContainer.css"
import DishContainer from "../../components/dishContainer/DishContainer"
import RightMenu from "../../components/rightMenu/RightMenu"

const MainContainer = ({ name, discount, link ,rightMenuActive}) => {
    return (
        <div >
            <div className="mainContainer">
                <div className="banner">
                    <Banner name="Rahul" discount="20" link='#' />
                    <div className="bannerImg">
                        <img src={BannerPic} alt="delivery pic" />
                    </div>

                </div>
                <DishContainer name={"Menu Category"} />
            </div>
            <div className="rightMenu">

                <RightMenu rightMenuActive={rightMenuActive}/>
            </div>

        </div>
    )
}

export default MainContainer

import React, { useEffect, useState } from 'react'
import "./App.css"
import Header from './components/header/Header'
import MenuContainer from './components/menuContainer/MenuContainer'
import { AiOutlineHome } from "react-icons/ai"
import { BsChatLeftText } from "react-icons/bs"
import { VscAccount } from "react-icons/vsc"
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { MdOutlineSummarize } from "react-icons/md"
import { FiSettings } from "react-icons/fi"
import MainContainer from "./components/mainContainer/MainContainer"

const App = () => {
  const [rightMenuActive, setRightMenuActive] = useState(false)
  const getRightMenu = (value) => {
    setRightMenuActive(value)
  }
  useEffect(() => {

    function setmenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"))
      this.classList.add("active")
    }
    const menuLi = document.querySelectorAll("#menu li")
    menuLi[0].classList.add("active")
    menuLi.forEach(n => {
      n.addEventListener("click", setmenuActive)
    })
  
  }, []);
  return (
    <div className='App'>{/*
      
      Header Section
  */}
      <Header getRightMenu={getRightMenu} rightMenuActive={rightMenuActive} />
      {/*
      
     main container 
  */}
      <MainContainer rightMenuActive={rightMenuActive} />



      {/*
      
      bottom menu
  */}
      <div className="bottomMenu">
        <ul id='menu'>
          <MenuContainer link={"#"} icon={<AiOutlineHome />} />
          <MenuContainer link={"#"} icon={<BsChatLeftText />} />
          <MenuContainer link={"#"} icon={<VscAccount />} />
          <MenuContainer link={"#"} icon={<MdOutlineFavoriteBorder />} />
          <MenuContainer link={"#"} icon={<MdOutlineSummarize />} />
          <MenuContainer link={"#"} icon={<FiSettings />} />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  )
}

export default App
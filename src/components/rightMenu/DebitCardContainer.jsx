import React from 'react'
import visaLogo from "../../Assets/visa-logo.png"
import chip from "../../Assets/chip.png"

const DebitCardContainer = () => {
  return (
    <div className='cardGroup'>
      <img src={visaLogo} alt="" className='cardLogo' />
      <img src={chip} alt="" className='cardChip' />
      <div className="cardNumber">111 222 111 121</div>
      <div className="cardName">Subhashis Patbandha</div>
      <div className="cardFrom">10/21</div>
      <div className="cardTo">10/25</div>
      <div className="cardRing"></div>
    </div>
  )
}

export default DebitCardContainer

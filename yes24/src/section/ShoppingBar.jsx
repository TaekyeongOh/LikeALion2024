import React from 'react'
import gift from '../assets/img/gift.svg'

const ShoppingBar = () => {
    return (
      <div className="shopping-bar">
        <button className="cart-button">카트에 넣기</button>
        <button className="buy-button">바로구매</button>
        <img src={gift} />
      </div>
    );
  };

export default ShoppingBar

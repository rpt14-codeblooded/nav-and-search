import React from 'react';

function TopBar(props) {
  return (
    <div id="container">
      <ul id="leftUl">
        <li>
          <span>
            Hi!
            <a href="#"> Sign in </a>
            or
            <span>
              <a href="#"> register</a>
            </span>
          </span>
        </li>
        <li>
          <a href="#"> Daily Deals</a>
        </li>
        <li>
          <a href="#"> Gift Cards</a>
        </li>
        <li>
          <a href="#"> Help and Contact</a>
        </li>
        <li>
          <img src="https://ir.ebaystatic.com/cr/v/c1/59591_070819_Prime_Generic_Doodle_150x30_FINAL_V2.gif"></img>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#"> Sell</a>
        </li>
        <li>
          <a href="#"> My eBay</a>
        </li>
        <li>
          <div> Bell Picture here</div>
        </li>
        <li>
          <div> Shopping Cart Picture here</div>
        </li>
      </ul>
    </div>
  )
}

export default TopBar;
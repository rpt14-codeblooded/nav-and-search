import React from 'react';
import style from 'styled-components';

const StyledContainer = style.div`
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    box-sizing: initial;
    display: block;
`

const StyledLeftUl = style.ul`
  margin-top: 1px;
  text-align: left;
  margin: 0;
  padding: 0;
  list-style: none outside none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`

const StyledFirstLi = style.li`
list-style: none;
background: 0;
padding: 0;
display: inline-block;
font-size: 12px;
margin: 0;
border: 0;
font-weight: normal;
text-align: -webkit-match-parent;
`
const StyledDividerLi = style.li`
list-style: none;
display: inline-block;
border-left: 1px #909090 solid;
font-size: 12px;
padding: 0 9px 0 11px;
margin: 0;
border: 0;
font-weight: normal;
font-size: 100%;
`

const StyledFinalLi = style.li`
display: none;
vertical-align: top;
padding-left: 15px !important;
height: 30px;
overflow: hidden;
padding-top: 7px;
margin-top: -7px;
background: 0;
box-sizing: initial;
list-style: none;
font-size: 12px;
padding: 0 9px 0 11px;
margin: 0;
border: 0;
font-weight: normal;
text-align: -webkit-match-parent;
`
function TopBar(props) {
  return (
    <StyledContainer>
      <StyledLeftUl>
        <StyledFirstLi>
          <span>
            Hi!
            <a href="#"> Sign in </a>
            or
            <span>
              <a href="#"> register</a>
            </span>
          </span>
          </StyledFirstLi>
        <StyledDividerLi>
          <a href="#"> Daily Deals</a>
        </StyledDividerLi>
        <StyledDividerLi>
          <a href="#"> Gift Cards</a>
        </StyledDividerLi>
        <StyledDividerLi>
          <a href="#"> Help and Contact</a>
        </StyledDividerLi>
        <StyledFinalLi>
          <img src="https://ir.ebaystatic.com/cr/v/c1/59591_070819_Prime_Generic_Doodle_150x30_FINAL_V2.gif"></img>
        </StyledFinalLi>
      </StyledLeftUl>
      <ul>
        <li>
          <a href="#"> Sell</a>
        </li>
        <li>
          <a href="#"> My eBay</a>
        </li>
        <li>
          <button></button>
        </li>
        <li>
          <button></button>
        </li>
      </ul>
    </StyledContainer>
  )
}

export default TopBar;
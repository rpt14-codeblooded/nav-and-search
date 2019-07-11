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
`
const StyledRightUl = style.ul`
position: absolute;
top: 1px;
right: 0;
z-index: 99999;
zoom: 1;
margin: 0;
padding: 0;
list-style: none outside none;
border: 0;
font-weight: normal;
font-size: 100%;
display: block;
`
const StyledRightLi = style.li`
  list-style: none;
  display: inline-block;
  border-right: 1px #c7c7c7 solid;
  vertical-align: middle;
  position: relative;
  top: -1px;
  padding: 2px 13px 0 3px;
  margin: 0 -1px;
  white-space: nowrap;
  font-weight: normal;
  font-size: 100%;
  text-align: -webkit-match-parent;
`

const StyledFirstLi = style.li`
list-style: none;
background: 0;
padding-right: 8px;
display: inline-block;
font-size: 12px;
margin: 0;
border: 0;
font-weight: normal;
text-align: -webkit-match-parent;
vertical-align: middle;
`
const StyledDividerLi = style.li`
list-style: none;
display: inline-block;
border-left: 1px #909090 solid;
font-size: 12px;
padding: 0 9px 0 11px;
margin: 0;
font-weight: normal;
font-size: 100%;
vertical-align: middle;
`

const StyledFinalLi = style.li`
display: inline-block;
vertical-align: middle;
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
const StyledMyEbayLi = style.li`
list-style: none;
display: inline-block;
vertical-align: middle;
position: relative;
white-space: nowrap;
margin: 0 3px;
padding-left: 13px;
padding-right: 33px;
font-weight: normal;
font-size: 100%;
text-align: -webkit-match-parent;
`

const StyledAlertLi = style.li`
list-style: none;
box-sizing: border-box;
margin-right: 0;
display: inline-block;
vertical-align: middle;
position: relative;
white-space: nowrap;
margin: 0 3px;
padding: 0;
border: 0;
font-weight: normal;
font-size: 100%;
text-align: -webkit-match-parent;
`

const StyledLink = style.a`
  text-decoration: none;
  color: #333;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #0654ba;
  }
  font-size: 12px;
`

const StyledSignInRegisterLink = style.a`
    text-decoration: none;
    color: #0654ba;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
    font-size: 12px;
`

const StyledCartLi = style.li`
display: inline-block;
vertical-align: middle;
position: relative;
white-space: nowrap;
margin: 0 3px;
padding: 0;
border: 0;
font-weight: normal;
font-size: 100%;
`

const StyledCartLink = style.a`
padding: 2px 13px 3px 17px;
font-size: 12px;
vertical-align: top;
cursor: pointer;
position: relative;
font-size: 12px;
color: #333 !important;
display: inline-block;
border: 1px solid transparent;
border-width: 2px 1px 0;
text-decoration: none !important;
}
`

const StyledCartImg = style.img`
  width: 20px;
  height: 18px;
  display: block;
  overflow: hidden;
  text-indent: -9999px;
  background-position: -55px -101px !important;
  background-size: 250px 200px;
  background-image: url(https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png);
  background-repeat: no-repeat;
`

const StyledBellImg = style.img`
background-position: -37px -101px !important;
width: 16px;
height: 18px;
display: block;
overflow: hidden;
text-indent: -9999px;
font-size: 0;
background-size: 250px 200px;
background-image: url(https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png);
background-repeat: no-repeat;
`
function TopBar(props) {
  return (
    <StyledContainer>
      <StyledLeftUl>
        <StyledFirstLi>
          <span>
            Hi!
            <StyledSignInRegisterLink href="/"> Sign in </StyledSignInRegisterLink>
            or
            <span>
              <StyledSignInRegisterLink href="/"> register</StyledSignInRegisterLink>
            </span>
          </span>
          </StyledFirstLi>
        <StyledDividerLi>
          <StyledLink href="#"> Daily Deals</StyledLink>
        </StyledDividerLi>
        <StyledDividerLi>
          <StyledLink href="#"> Gift Cards</StyledLink>
        </StyledDividerLi>
        <StyledDividerLi>
          <StyledLink href="#"> Help and Contact</StyledLink>
        </StyledDividerLi>
        <StyledFinalLi>
          <img src="https://ir.ebaystatic.com/cr/v/c1/59591_070819_Prime_Generic_Doodle_150x30_FINAL_V2.gif"></img>
        </StyledFinalLi>
      </StyledLeftUl>
      <StyledRightUl>
        <StyledRightLi>
          <StyledLink href="#"> Sell</StyledLink>
        </StyledRightLi>

        <StyledMyEbayLi>
          <StyledLink href="#"> My eBay</StyledLink>
        </StyledMyEbayLi>
        <StyledAlertLi>
          <StyledCartLink>
          <StyledBellImg src=""></StyledBellImg>
          </StyledCartLink>
        </StyledAlertLi>
        <StyledCartLi>
          <StyledCartLink>
            <StyledCartImg src=""></StyledCartImg>
          </StyledCartLink>
        </StyledCartLi>
      </StyledRightUl>
    </StyledContainer>
  )
}

export default TopBar;
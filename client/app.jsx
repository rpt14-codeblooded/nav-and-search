import React from 'react';
import TopBar from './components/TopBar.jsx';
import style from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    display: block;
    margin: 0;
  }
`

const StyledHeader = style.header`
  min-width: 320px;
  position: relative;
  margin: 0;
  padding: 35px 0 10px 0;
  white-space: nowrap;
  line-height: 1;
  font-size: 14px;
  color: #333;
  text-align: left;
  display: block;
  border: 0;
  font-weight: normal;
`

const StyledContainer = style.div`
  background: url(https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/imgbg.jpg) repeat 0 0 #f8f8f8;
  color: #333;
  font-size: 14px;
  font-family: "Helvetica neue",Helvetica,Arial,Sans-serif;
  line-height: 1;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <StyledContainer>
        <React.Fragment>
        <GlobalStyle/>
      </React.Fragment>
        <StyledHeader>
          <TopBar />
        </StyledHeader>
      </StyledContainer>
    )
  }
}

export default App;
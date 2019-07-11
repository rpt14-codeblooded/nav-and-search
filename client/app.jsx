import React from 'react';
import TopBar from './components/TopBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TopBar />
    )
  }
}

export default App;
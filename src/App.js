import React, { Component } from 'react';
import MainMap from './components/MainMap';
import ResponsiveDrawer from './components/Drawer'

class App extends Component {
  render() {
    return (
      <div>
        <ResponsiveDrawer />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';

import Splash from './application/components/Splash';
import Header from './application/components/Header'

export default class App extends React.Component {

  state = {
    splash: true
  }

  componentDidMount() {
    setTimeout(() => this.setState({ splash: false }), 5000);
  }

  render() {
    // if (this.state.splash) {
    //   return (
    //     <div className="App-Splash" >
    //       <div className="App-loading" >
    //         <Splash />
    //       </div>
    //     </div>
    //   )
    // }
    return (
      <div className="App" >
        <Header />
        {this.props.children}
      </div>
    );
  }
}
import React from 'react';
import './App.css';

import Header from './application/components/Header'
import Store from './application/redux/Store'

import { Provider } from 'react-redux'

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
      <Provider store={Store} >
        <div className="App" >
          <Header />
          {this.props.children}
        </div>
      </Provider>
    );
  }
}
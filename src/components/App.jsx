import React, { Component } from 'react'
import { Provider } from 'unstated'
import UNSTATED from 'unstated-debug'
import '../assets/scss/global.scss'
import './App.scss'
import SideBar from "./SideBar/SideBar"
import Chat from './Chat/Chat';

UNSTATED.logStateChanges = false


export default class App extends Component {
  render() {
    return (
      <Provider>
        <div id="react-app">
          <SideBar/>
          <Chat/>
        </div>
      </Provider>
    )
  }
}

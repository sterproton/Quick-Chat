import React, { Component } from 'react'
import { Provider } from 'unstated'
import UNSTATED from 'unstated-debug'
import '../assets/scss/global.scss'
import './App.scss'

UNSTATED.logStateChanges = false

const tabList = ['one', 'two', 'three', 'four', 'five']

const chatList = new Array(30).fill({
  name: 'jack',
  message: 'hello, world',
  unRead: 5,
})

const chatMessages = new Array(30).fill({
  name: 'test',
  message: 'this is a test',
})

export default class App extends Component {
  render() {
    return (
      <Provider>
        <div id="react-app">
          <div id="sidebar">
            <div id="userInfo">
              <div className="wrap">
                <div className="avatar" />
                <div className="user-name">test</div>
              </div>
            </div>
            <navigator className="nav">
              <ul>
                {tabList.map(tab => <li className="tabItem">{tab}</li>)}
              </ul>
            </navigator>
          </div>
          <div id="main">
            <header id="main-header">
              <div className="notify-icon" />
              <div className="status">Status:Sale</div>
            </header>
            <div className="chat-label">
              Chat
            </div>
            <div id="chat-wrap">
              <div id="chatPanel">
                <div id="chatPanel-search">
                  <div />
                  <input type="text" placeholder="search" />
                </div>
                <div className="chat-item-wrap">
                  {chatList.map(chat => (
                    <div className="chat-item">
                      <div className="chat-item-avatar" />
                      <div className="chat-item-main">
                        <span>{chat.name}</span>
                        <span>{chat.message}</span>
                      </div>
                    </div>
                  ),
                  )}
                </div>
              </div>
              <div id="chatBox">
                <div className="chat-box-header">
                  <p>Gold Coast</p>
                  <p>from hlai</p>
                </div>
                <div className="chat-message-wrap">
                  {chatMessages.map(item => (<div className="chat-message">{item.message}</div>),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

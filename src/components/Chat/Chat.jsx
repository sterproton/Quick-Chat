import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import ChatBox from './ChatBox/ChatBox'
import ChatPanel from './ChatPanel/ChatPanel'
import './Chat.scss'

const NETWORK_STATUS = {
  ONLINE: 1,
  OFFLINE: 0,
}

export default class Chat extends Component {

  state = {
    networkStatus: NETWORK_STATUS.ONLINE,
    chatList: new Array(30).fill({
      name: 'Jack',
      message: 'hello, world',
      unRead: 5,
    }),
  }


  render() {
    return (
      <div id="main">
        <header id="main-header">
          <div className="status">Status:{this.state.networkStatus ? 'Active' : 'Offline'}</div>
          <FontAwesomeIcon icon={faBell} />
        </header>
        <div className="chat-label">Chat</div>
        <div id="chat-wrap">
          <ChatPanel chatList={this.state.chatList} />
          <ChatBox />
        </div>
      </div>
    )
  }
}

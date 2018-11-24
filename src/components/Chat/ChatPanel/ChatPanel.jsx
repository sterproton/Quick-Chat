import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './ChatPanel.scss'
import avatar from '../../../assets/img/download.png'

export default class ChatPanel extends Component {

  render() {
    return (
      <div id="chatPanel">
        <div id="chatPanel-search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="search" />
        </div>
        <div className="chat-item-wrap">
          {this.props.chatList.map((chat, index) => (
            <div key={index} className="chat-item">
              <div className="chat-item-avatar">
                <img src={avatar} alt=""/>
              </div>
              <div className="chat-item-main">
                <p>{chat.name}</p>
                <p>{chat.message}</p>
              </div>
              <div className="chat-item-info">
                <p>02 Feb</p>
                <dis className="unread-item">
                  <p>30</p>
                </dis>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

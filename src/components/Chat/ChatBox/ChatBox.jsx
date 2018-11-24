import React, { Component } from 'react'
import avatar from '../../../assets/img/download.png'
import './ChatBox.scss'

export default class ChatBox extends Component {

  state = {
    chatMessages: new Array(30).fill({
      name: 'test',
      message: 'this is a test',
      time: new Date(),
    }),
  }

  render() {
    return (
      <div id="chatBox">
        <div className="chat-box-header">
          <p>Gold Coast</p>
          <p>from hlai</p>
        </div>
        <div className="chat-message-wrap">
          {this.state.chatMessages.map((item, index) => (
            <div key={index} className="chat-message">
              <div className="chat-message-user">
                <div className="chat-message-avatar">
                  <img src={avatar} alt=""/>
                </div>
                <span>{`${item.time.getHours()}:${item.time.getMinutes()}`}</span>
              </div>
              <div className="chat-message-item">
                {item.message}
              </div>
            </div>
          ))}
        </div>
        <div className="chat-input-panel">
          <input type="text" placeholder="input message"/>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './SideBar.scss'
import avatar from '../../assets/img/download.png'

export default class SideBar extends Component {
  state = {
    userName: 'test',
    avatar: '',
  }

  tabList = ['one', 'two', 'three', 'four', 'five']

  render() {
    return (
      <div id="sidebar">
        <div id="userInfo">
          <div className="wrap">
            <div className="avatar">
              <img src={avatar} alt=""/>
            </div>
            <div className="user-name">{this.state.userName}</div>
          </div>
        </div>
        <nav className="nav">
          <ul>
            {this.tabList.map(tab => (
              <li key={tab} className="tabItem">{tab}</li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

// const SideBar = (props) => {
//   return (
//     <div id="sidebar">
//       <div id="userInfo">
//         <div className="wrap">
//           <div className="avatar" />
//           <div className="user-name">test</div>
//         </div>
//       </div>
//       <navigator className="nav">
//         <ul>
//           {tabList.map(tab => <li className="tabItem">{tab}</li>)}
//         </ul>
//       </navigator>
//     </div>
//   )
// }

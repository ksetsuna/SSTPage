import React from 'react'

import Face from '../Face/Face'

class MemberListUnit extends React.Component{
  constructor() {
    super()

    this.emailIcon = require('../Icon/Images/email.svg');

  }
  render(){
    return (
      <li className="member">
        <Face faceImage={this.props.faceImage} faceSize="medium" peopleName={this.props.name}/>
          <div className="information">
          <p className="name_line">
            <span className="name">{this.props.name}</span>
            <span className="title">{this.props.title}</span>
          </p>
          <p className="study_direction">{this.props.researchDirection}</p>
          <p className="email">
            <img src={this.emailIcon} alt="An icon of Email" className="email_icon"/>
            <span>user.name@bnu.edu.cn</span>
          </p>
        </div>
      </li>
    )
  }
}

export default MemberListUnit
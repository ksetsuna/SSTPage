import React from "react"

import { Link } from 'react-router-dom'

import './LineButton.less'

class LineButton extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let linebuttonClassName 
    linebuttonClassName = 'line_button' + (this.props.additionalClassName ? ` ${this.props.additionalClassName}` : '');

    return (
      <div className={linebuttonClassName}>
        <Link to={this.props.buttonLink}>{this.props.buttonContent}</Link>
      </div>
    )
  }
}

export default LineButton
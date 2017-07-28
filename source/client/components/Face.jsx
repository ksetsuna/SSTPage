import React from "react"

import './Face.less'

class Face extends React.Component{
  render(){
    let defaultFace, faceImage, imageLocation, elementClassName, imageSrc, imageAltText;
    
    defaultFace = require('./Face/images/default.svg');
		elementClassName = 'face_img' + (this.props.faceSize ? ` ${this.props.faceSize}` : 'large');
    imageAltText = this.props.peopleName ? `A portrait of ${this.props.peopleName}` : 'A portrait';
    imageSrc = this.props.faceImage ? `/assets/user/images/face/${this.props.faceImage}` : defaultFace;

    return (
			<div className="face">
				<img className={elementClassName} src={imageSrc} alt={imageAltText} title={this.props.peopleName}/>
			</div>
    )
  }
}

export default Face
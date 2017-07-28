import React from "react"

import Face from './Face'

import './FaceList.less'

class FaceList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let listClassName, elementCount, elementKeys, faceSize;

    listClassName = 'face_list flexbox' + ((this.props.fold || this.props.fold === undefined) ? ' fold' : '');
    elementKeys = Object.keys(this.props.listContent);
    elementCount = elementKeys.length + 2;
    faceSize = this.props.faceSize ? this.props.faceSize : 'small';

    return (
      <div className={listClassName}>
        <ul className="flexbox">
          {
            elementKeys.map(i => {
              elementCount --;
              return (
                <li key={i}>
                  <div style={{zIndex: elementCount}}>
                    <Face peopleName={this.props.listContent[i].name} 
                          faceImage={this.props.listContent[i].image} faceSize={faceSize} />
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default FaceList
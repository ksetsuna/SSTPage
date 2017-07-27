import React from 'react'

import JournalIcon from './JournalIcon'
import FaceList from '../Face/FaceList'

class PublicationListItem extends React.Component{
  render(){
    return (
      <li>
        <div className="title">
          <div className="logo">
            <JournalIcon icon={this.props.icon} name={this.props.journal} />
          </div>
          <div className="publication_title">
            <span className="publication_name">{this.props.title}</span>
            <span className="year">{this.props.year}</span>
          </div>
        </div>
        <div className="author">
          <FaceList listContent={this.props.authors} faceSize="extra-small"/>
        </div>
      </li>
    )
  }
}

export default PublicationListItem
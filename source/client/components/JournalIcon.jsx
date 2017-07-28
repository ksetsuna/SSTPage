import React from 'react'

class JournalIcon extends React.Component{
  render(){
    let journalIcon;

    journalIcon = `/assets/user/images/journalIcon/${this.props.icon}`;
    return <img src={journalIcon} alt={this.props.name} title={this.props.name}/>
  }
}

export default JournalIcon
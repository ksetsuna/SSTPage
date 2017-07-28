import React from "react"

import Paper from 'material-ui/Paper';

import './ResearchSimpleCard.less'

class ResearchSimpleCard extends React.Component{
  constructor(props) {
    super(props)
    this.state = {elevation: 4, hover: false};

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({elevation: 8, hover: true});
  }

  mouseLeave() {
    this.setState({elevation: 4, hover: false});
  }

  render() {
    let cardBackgroundStyle, paperClassName;
    
    cardBackgroundStyle = {
      backgroundImage: `url(/assets/user/images/paperCover/${this.props.researchCover})`
    }

    paperClassName = 'research_simple_card' + (this.state.hover ? ' hover' : '');

    return (
      <Paper className={paperClassName}  elevation={this.state.elevation}
             onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <div className="content_container flexbox">
          <div className="research_simple_card_background" style={cardBackgroundStyle}>
            <div className="background_filler"></div>
          </div>
          <div className="title_container">
            <h3>{this.props.researchTitle}</h3>
          </div>
        </div>
      </Paper>
    )
  }
}

export default ResearchSimpleCard
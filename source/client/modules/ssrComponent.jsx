import React from 'react'
import PropTypes from 'prop-types'

const ssr = (ComposedComponent) => {
  class SSRC extends React.Component{
    constructor(props, context){
      super(props, context);

      this.pageData = context.pageData || window.__pageData || {};
    }

    componentWillUnmount() {
      window.__directMark = false;
      window.__pageData = {};
    }

    render(){
      return <ComposedComponent {...this.props} pageData={this.pageData}/>
    }
  }

  SSRC.contextTypes = {
    pageData: PropTypes.object
  };

  return SSRC
}

export default ssr
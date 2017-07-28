import React from 'react'

import ssr from '../modules/ssrComponent'

class NotFoundPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <h1 id="title">404 - Not Found.</h1>
    )
  }
}

export default ssr(NotFoundPage)
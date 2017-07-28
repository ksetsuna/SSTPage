import React from 'react'

import configuration from '../../../configuration'
import fetchJson from '../../modules/fetchJson'
import ssr from '../modules/ssrComponent'

import PublicationListItem from './PublicationListItem'
import './PublicationList.less'

class Publication extends React.Component{
  constructor(props){
    super(props)
    
    this.state = props.pageData;
    if(!this.state.publicationList) this.state.publicationList = [];
  }

  async fetchData() {
    let publicationList;
    publicationList = await fetchJson('/api/publication/list');

    return {
      publicationList: publicationList,
    }
  }

  componentDidMount() {
    if(!window.__directMark) {
      this.fetchData('/api/publication/list')
          .then(data => this.setState(data))
    }
  }

  render(){
    return (
      <div>
        <h2>学术论文</h2>
        <ul className="publication_list">
          { this.state.publicationList.map(item => (
            <PublicationListItem key={item.__fileName} icon={item.icon} journal={item.journal}
                                 title={item.title} year={item.year} authors={item.authors} />
            )) }
        </ul>
      </div>
    )
  }
}

export default ssr(Publication)
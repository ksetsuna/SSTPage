import _ from 'lodash';
import React from 'react'
import data from '../../data';
import './PublicationList.less'

import PublicationListItem from './PublicationListItem'

const d1 = _.keyBy(data.members, 'identity');
const d2 = _.keyBy(data.journals, 'name');

const publications = data.publications.map(p => ({
        ...p,
        authors: p.authors.map(id => d1[id] || {name: id, __offStaff: true}),
        icon: d2[p.journal].icon
    })
);


class Publication extends React.Component {


    render() {

        const publicationList = publications;
        return (
            <div>
                <h2>学术论文</h2>
                <ul className="publication_list">
                    {publicationList.map((item, i) => (
                        <PublicationListItem key={i} icon={item.icon} journal={item.journal}
                                             title={item.title} year={item.year} authors={item.authors}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Publication
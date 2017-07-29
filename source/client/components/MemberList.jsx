import _ from 'lodash';
import React from 'react'

import data from '../../data';

import './MemberList.less'

import MemberListUnit from './MemberListUnit'

class MemberList extends React.Component {
    constructor(props) {
        super(props);

        // todo replate data source
        this.groups = _.groupBy(data.members, 'group');
    }


    render() {
        return (
            <div>
                <section>
                    <h2 className="member_list_title">PI组成员</h2>
                    <ul className="member_list">
                        {
                            this.groups.T.map(member => (
                                <MemberListUnit key={member.name}
                                                faceImage={member.image} name={member.name}
                                                title={member.title} researchDirection={member.researchDirection}/>
                            ))
                        }
                    </ul>
                </section>
                <section>
                    <h2 className="member_list_title">导师组成员</h2>
                    <ul className="member_list">
                        {
                            this.groups.S.map(member => (
                                <MemberListUnit key={member.name}
                                                faceImage={member.image} name={member.name}
                                                title={member.title} researchDirection={member.researchDirection}/>
                            ))
                        }
                    </ul>
                </section>
            </div>
        )
    }
}

export default MemberList
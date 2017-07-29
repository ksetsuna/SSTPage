import _ from 'lodash';
import React from 'react'

import {connect} from 'react-redux'

import './MemberList.less'

import MemberListUnit from './MemberListUnit'

class MemberList extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {
        const {groups} = this.props;
        return (
            <div>
                <section>
                    <h2 className="member_list_title">PI组成员</h2>
                    <ul className="member_list">
                        {
                            groups.T.map(member => (
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
                            groups.S.map(member => (
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

export default connect(
    x => ( {groups: _.groupBy(x.members, 'group')})
)(MemberList)
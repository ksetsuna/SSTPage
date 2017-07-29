import React from 'react'
import cn from 'classnames';
import './SectionContainer.less'

class SectionContainer extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const titleElement        = this.props.containerName ? <h2 className='section_container_title'>{this.props.containerName}</h2> : null,
              containerBackground = {backgroundImage: `url('${this.props.containerBackground}')`};

        return (
            <section className={cn('section_container', this.props.additionalClassName)} style={containerBackground}>
                {titleElement}
                {this.props.children}
            </section>
        )
    }
}

export default SectionContainer
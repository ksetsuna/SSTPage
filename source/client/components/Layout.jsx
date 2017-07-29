import cn from 'classnames'
import React from 'react'
import {Helmet} from 'react-helmet'
import {Route, Switch} from 'react-router'

import HeaderBar from './HeaderBar'

import './Layout.less'
import Index from './Index'
import MemberList from './MemberList'
import LineButton from './LineButton'
import NotFoundPage from './NotFoundPage'
import Publication from './PublicationList'
import SectionContainer from './SectionContainer'

class Layout extends React.Component {


    render() {
        const year = new Date().getFullYear();
        const additionalClassName = cn(['top_section', 'root_page']);
        return (
            <div>
                <Helmet>
                    <title>人际间语言交流的脑活动同步机制课题</title>
                </Helmet>
                <SectionContainer additionalClassName={additionalClassName}
                                  containerBackground={require('./Layout/images/headerBackground.jpg')}>
                    {
                        // TODO replace by router
                        //    this.state.backgroundElement
                        //
                    }
                    <HeaderBar/>
                    <section className="introduction">
                        <p className="main_text">
                            我们主要采用磁共振、脑电以及近红外光学成像等多种神经科学研究手段考察人际交流的心理和脑机制，
                            关注自然情境下人际间社会性互动的基本规律及其潜在的临床和教学应用价值。
                        </p>
                        <LineButton buttonContent="了解更多" buttonLink="/#"/>
                    </section>
                    <h1 className="page_title">{

                        // TODO replace by router
                        // this.state.pageTitle

                    }</h1>
                </SectionContainer>
                <div className="page_content">
                    <Switch>
                        <Route path="/" exact component={Index}/>
                        <Route path="/member" component={MemberList}/>
                        <Route path="/publication" component={Publication}/>
                        <Route path="" component={NotFoundPage}/>
                    </Switch>
                </div>
                <footer className="bottom_section">
                    <div className="logo">
                        <img src={require('./Layout/images/footerLogo.png')} alt="logo of BNU and our lab."/>
                    </div>
                    <div className="info">
                        <p>版权所有 ©2016-{year} 北京师范大学脑与认知科学学院 · 人际间语言交流的脑活动同步机制课题组保留所有权利。</p>
                        <p>Copyright ©2016-{year} Research Group of the Synchronization of Brain Activity on Interpersonal Communication All Right Reserved.</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Layout
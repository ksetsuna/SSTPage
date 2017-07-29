import {MuiThemeProvider} from 'material-ui/styles'
import React from 'react'

import injectTapEventPlugin from 'react-tap-event-plugin'

import '../modules/main.less'
import '../modules/normalize.css'

import Layout from './Layout'
import theme from './theme'


class App extends React.Component {


    componentDidMount() {
        injectTapEventPlugin();
    }


    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <Layout/>
            </MuiThemeProvider>
        )
    }
}


export default App;
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import PropTypes from 'prop-types'
import { StylesProvider } from '@material-ui/styles'


function App({ Component, pageProps }) {

    return (
        <Provider store={configureStore}>
            <StylesProvider injectFirst>
                <Component {...pageProps} />
            </StylesProvider>
        </Provider>
    )
}

App.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.object,
}

export default App

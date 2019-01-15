import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
    blue: '#60a3bc',
    pink: '#b71540',
    text: '#000',
}

const GobalStyles = createGlobalStyle`
    html {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 10px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-size: 1.6rem;
        line-height: 1.8;
        padding: 0;
        margin: 0;
        min-height: 100vh;
        background-color: ${props => props.theme.bg};
        color: ${props => props.theme.text};
        font-family: 'Montserrat', sans-serif;
        font-display: swap;
    }
`

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <GobalStyles />
            {children}
        </Fragment>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

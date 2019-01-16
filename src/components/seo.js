import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function SEO({ lang, description, title }) {
    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
        >
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="preconnect" href="https://fonts.gstatic.com/" />
        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `en`,
    description: "Brad Azevedo"
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    title: PropTypes.string.isRequired,
}

export default SEO

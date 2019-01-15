import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, title }) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => (
                <Helmet
                    htmlAttributes={{
                        lang,
                    }}
                    title={title}
                />
            )}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`

import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Hedgehog from '../svg/Hedgehog.svg'

const FancyHedgehog = styled(Hedgehog)`
    display: block;
    width: 16rem;
    margin: 0 auto;
`

const Centered = styled.main`
    background-color: ${props => props.theme.blue};
    text-align: center;
    height: 100vh;
    display: grid;
    align-content: center;
`

const IndexPage = () => (
    <Layout>
        <SEO title="Brad Azevedo" />
        <Centered>
            <h1>Brad Azevedo</h1>
            <FancyHedgehog />
        </Centered>
    </Layout>
)

export default IndexPage

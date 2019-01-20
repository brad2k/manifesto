/* eslint-disable */

import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import face from '../images/face.jpg'
import face200 from '../images/face.200.jpg'

const moveBg = keyframes`
    0%, 100% {
      background-position: left top;
    }
    50% {
      background-position: center right;
    }
`

const fancyFont = css`
    font-family: 'Shadows Into Light';
    font-display: swap;

    &:hover {
        background: linear-gradient(to right, ${props => props.theme.blue}, ${props => props.theme.pink});
        background-color: ${props => props.theme.pink};
        background-clip: text;
        background-size: 200% 100%;
        -webkit-text-fill-color: transparent;
        box-decoration-break: clone;
        animation: ${moveBg} 3s infinite;
    }
`



const Wrapper = styled.div`
    border: 2rem solid ${props => props.theme.blue};
    border-width: 2rem 0;
`

const Centered = styled.main`
    max-width: 76rem;
    margin: 0 auto;
    width: 100%;
    padding: 0 2rem 10rem;
`

const Face = styled.img`
    display: block;
    width: 20rem;
    margin: 0 auto;
    border-radius: 50%;
    // box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.5);
    border: 0.5rem solid ${props => props.theme.blue};
`

const WelcomeBox = styled.header`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0;
    font-size: 10rem;
    margin: 4rem 0 5rem;
    text-align: center;

    @media (min-width: 40rem) {
        grid-template-columns: 20rem 1fr;
        margin: 8rem 0 10rem;
        text-align: left;
        grid-gap: 6rem;
    }

    strong {
        ${fancyFont}
    }
`

const Group = styled.div`
    margin-bottom: 5rem;

    &:not(:first-of-type):before {
        content: '';
        display: block;
        width: 10rem;
        height: 0.1rem;
        background-color: ${props => props.theme.blue};
    }

    a {
        color: #000;
        text-decoration: none;
        display: block;
        margin-bottom: 1rem;

        @media (min-width: 50rem) {
            margin-right: 5rem;
            display: inline-block;
        }
    }
`

const H2 = styled.h2`
    ${fancyFont};
    display: inline-block;

    &:not(:first-of-type) {
        margin-top: 5rem;
    }
`

const SecondPage = () => (
    <Layout>
        <Wrapper>
            <SEO title="Brad Azevedo — About me" />
            <Centered>
                <WelcomeBox>
                    <Face
                        srcSet={`${face200},
                                ${face} 2x`}
                        src={face200} alt="Me" />
                    <div>
                        <strong>Ahoy!</strong>
                    </div>
                </WelcomeBox>

                <Group>
                    <H2>Who am I?</H2>

                    <p>
                        Allow me to introduce myself: I’m Brad Azevedo, a UI
                        engineer who loves building pretty things. I began my
                        journey in the days of FrontPage (with which I built the
                        very first website for my high school) and made a rather
                        circuitous tour through college, where I earned a degree
                        in visual design. I found that design wasn’t exactly my
                        bailiwick, so I returned to web development, where my
                        true passion lies. I’ve since spent more than a decade
                        riding the rollercoaster from those early days of
                        WYSIWYGs to the incredibly dynamic and complex ecosystem
                        that it has become.
                    </p>

                    <p>
                        My untraditional (read: primarily self-taught)
                        background has served as the incubation tank in which I
                        developed an interest in both design and development. I
                        stumbled into my role as a UI engineer through years of
                        collaboration with design, product and engineering
                        teams, working to define products, identify edge cases
                        and opportunities to simplify the build process by not
                        reinventing the wheel, and, from time to time, heeding
                        the advice of Coco Chanel: “Simplicity is the keynote of
                        all true elegance.” To that end, I’ve worked with design
                        teams to establish a common design language—and to some
                        degree a style guide—with which we built new components
                        that felt clean, consistent and reusable.
                    </p>

                    <p>
                        A scary thing crossed my desk a few years ago: webpack.
                        What am I to make of this confusing graphic with all
                        these little boxes being neatly packed into one?
                        Sorcery, I thought, but as it turns out, something
                        closer to wizardry. The mental leap from the old school
                        of jQuery and Sass into this world of webpack was indeed
                        a tough one to grapple with, but I realized the benefits
                        shortly after the glaze wore off of my eyes. I dove into
                        React and thought, “ZOMG, this JSX business is killing
                        me”, but five minutes later I was among the converted.
                        ES6 is now called ES2015, you say? I resisted CSS-in-JS
                        because that’s against the rules, damn it, but I spent
                        some time with styled-components and ate my words.
                    </p>

                    <p>
                        All this is to say that the web has come a long way
                        since FrontPage and I’ve embraced this evolution in
                        tooling and frameworks in my noble quest to build
                        delightful, thoughtful user interfaces. I strive to
                        expand my skill set and learn new ways to approach a
                        problem. New frameworks come and go more quickly than
                        ever, and while it’s impossible to know them all, I’m
                        confident in my ability to pick them up; I can, after
                        all, read documentation like the best of them.
                    </p>
                </Group>

                <Group>
                    <H2>What am I looking for?</H2>

                    <p>
                        I’m looking for a role in which I can reignite my
                        passion for building awesome UIs while contributing to a
                        product that pushes boundaries and challenges
                        convention. I enjoy collaborating with other teams and
                        being part of the process more than spending eight hours
                        a day stuck in my code editor.
                    </p>

                    <p>I’m looking to join a team that:</p>

                    <ul>
                        <li>
                            respects and encourages one another and doesn’t bog
                            itself down with egos and inflexibility
                        </li>
                        <li>
                            respects that education is an ongoing process and
                            encourages growth
                        </li>
                        <li>
                            recognizes that teams are more successful with
                            members with complementary skills, not identical
                            skills
                        </li>
                    </ul>
                </Group>

                <Group>
                    <H2>What do I value?</H2>

                    <ul>
                        <li>Clear communication and focus</li>
                        <li>
                            Providing and hearing alternate perspectives, even
                            if they challenge the status quo
                        </li>
                        <li>
                            Oxford commas and the proper use of em and en dashes
                        </li>
                        <li>Simplicity over complexity</li>
                        <li>Trust and respect among teammates</li>
                        <li>
                            Meditation and generally taking time for mental
                            health
                        </li>
                        <li>Relative autonomy</li>
                    </ul>
                </Group>

                <Group>
                    <H2>Sound good?</H2>

                    <p>Get in touch!</p>

                    <p>
                        <a href="mailto:&#098;&#114;&#097;&#100;&#050;&#107;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;?subject=Ahoy!">
                            &#098;&#114;&#097;&#100;&#050;&#107;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
                        </a>
                        <a href="tel:&#052;&#049;&#053;&#045;&#054;&#048;&#049;&#045;&#056;&#048;&#052;&#055;">
                            &#052;&#049;&#053;&#045;&#054;&#048;&#049;&#045;&#056;&#048;&#052;&#055;
                        </a>
                        <a
                            href="https://www.dropbox.com/s/9fd713uf50gif5l/Brad%20Azevedo%20-%20CV.pdf?dl=0"
                            rel="external"
                        >
                            Resume &raquo;
                        </a>
                    </p>
                </Group>
            </Centered>
        </Wrapper>
    </Layout>
)

export default SecondPage

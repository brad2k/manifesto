/* eslint-disable */

import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import face from '../images/face.jpg'
import face200 from '../images/face.200.jpg'

const GitHub = ({ className }) => (
    <svg viewBox="0 0 16 16" className={className}>
        <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        />
    </svg>
)

const Email = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 80"
        className={className}
    >
        <path
            style={{
                textIndent: 0,
                textTransform: 'none',
                blockProgression: 'tb',
            }}
            d="M10 21c-3.29 0-6 2.71-6 6v46c0 3.29 2.71 6 6 6h80c3.29 0 6-2.71 6-6V27c0-3.29-2.71-6-6-6H10zm1.281 4H88.72L52 56.344c-.922.787-3.078.787-4 0L11.281 25zM8 27.469l26.219 22.344L8 72.469v-45zm84 0v45L65.781 49.813 92 27.469zm-54.719 25l8.125 6.906a7.092 7.092 0 0 0 9.188 0l8.125-6.906L88.78 75H11.22L37.28 52.469z"
            overflow="visible"
            color="#000"
        />
    </svg>
)

const Phone = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 450"
        className={className}
    >
        <path d="M320.912 61H179.088c-14.293 0-25.922 13.009-25.922 29v320c0 15.99 11.628 29 25.922 29h141.824c14.293 0 25.922-13.01 25.922-29V90c0-15.991-11.629-29-25.922-29zm11.922 349c0 8.271-5.348 15-11.922 15H179.088c-6.574 0-11.922-6.729-11.922-15v-5.5h165.668v5.5zm0-19.5H167.166V112h165.668v278.5zm0-292.5H167.166v-8c0-8.271 5.348-15 11.922-15h141.824c6.574 0 11.922 6.729 11.922 15v8z" />
    </svg>
)

const Resume = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 70 70"
        className={className}
    >
        <path d="M61.82 67V3a1 1 0 0 0-1-1H23.95c-.022 0-.04.011-.062.012a.985.985 0 0 0-.264.054c-.032.011-.064.02-.095.034a.988.988 0 0 0-.272.184c-.005.004-.011.006-.015.01l-.002.002L8.473 17.192l-.001.002-.002.002a.987.987 0 0 0-.191.285c-.015.03-.023.062-.034.094a.987.987 0 0 0-.053.262c-.001.022-.012.04-.012.063V67a1 1 0 0 0 1 1h51.64a1 1 0 0 0 1-1zM22.95 5.43v11.468l-11.37.002L22.95 5.43zM59.82 66H10.18V18.9l13.77-.002a1 1 0 0 0 1-1V4h34.87v62z" />
        <path d="M30.948 33.134h23.458a1 1 0 0 0 1-1V8.509a1 1 0 0 0-1-1H30.948a1 1 0 0 0-1 1v23.625a1 1 0 0 0 1 1zm1-23.625h21.458v21.625H31.948V9.509z" />
        <path d="M46.428 19.56c-.022-.006-.043 0-.065-.004a.955.955 0 0 0-.205-.012c-.062 0-.123 0-.183.012-.063.013-.119.038-.178.063-.06.024-.117.047-.17.082-.052.035-.094.078-.14.122a.962.962 0 0 0-.134.152c-.013.02-.033.03-.044.05-.54.932-1.55 1.51-2.636 1.51s-2.097-.578-2.637-1.51c-.011-.02-.031-.031-.044-.05a.957.957 0 0 0-.135-.152c-.045-.044-.086-.087-.137-.12-.055-.038-.114-.06-.175-.086-.057-.023-.112-.048-.173-.06-.062-.013-.125-.012-.19-.013a.957.957 0 0 0-.198.012c-.022.004-.044-.002-.067.004-2.583.677-4.387 3.079-4.387 5.839v3.125a1 1 0 0 0 1 1h14.294a1 1 0 0 0 1-1v-3.125c0-2.759-1.807-5.16-4.396-5.84zm2.396 7.964H36.53v-2.125c0-1.616.908-3.044 2.271-3.679.948 1.132 2.363 1.815 3.872 1.815s2.924-.683 3.871-1.815c1.37.635 2.28 2.063 2.28 3.679v2.125z" />
        <path d="M42.673 19.744c2.378 0 4.312-1.935 4.312-4.313s-1.934-4.312-4.312-4.312-4.313 1.934-4.313 4.312 1.935 4.313 4.313 4.313zm0-6.625c1.275 0 2.312 1.037 2.312 2.312s-1.037 2.313-2.312 2.313-2.313-1.038-2.313-2.313 1.037-2.312 2.313-2.312zM54.406 37.408H19.761a1 1 0 1 0 0 2h34.645a1 1 0 1 0 0-2zM54.406 45.102h-27.23a1 1 0 1 0 0 2h27.23a1 1 0 1 0 0-2zM54.406 52.797H22.844a1 1 0 1 0 0 2h31.562a1 1 0 1 0 0-2zM54.406 60.491H15.594a1 1 0 1 0 0 2h38.812a1 1 0 1 0 0-2z" />
    </svg>
)

const ContactIcon = css`
    display: inline-block;
    width: 2rem;
    margin-right: 0.5rem;
`

const GitHubIcon = styled(GitHub)`
    ${ContactIcon};
`

const EmailIcon = styled(Email)`
    ${ContactIcon};
`

const PhoneIcon = styled(Phone)`
    ${ContactIcon};
`

const ResumeIcon = styled(Resume)`
    ${ContactIcon};
`

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

    &:hover {
        background: linear-gradient(
            to right,
            ${props => props.theme.blue},
            ${props => props.theme.pink}
        );
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
                        src={face200}
                        alt="Me"
                    />
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
                            <EmailIcon />{' '}
                            &#098;&#114;&#097;&#100;&#050;&#107;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
                        </a>
                        <a href="tel:&#052;&#049;&#053;&#045;&#054;&#048;&#049;&#045;&#056;&#048;&#052;&#055;">
                            <PhoneIcon />{' '}
                            &#052;&#049;&#053;&#045;&#054;&#048;&#049;&#045;&#056;&#048;&#052;&#055;
                        </a>
                        <a
                            href="https://www.dropbox.com/s/9fd713uf50gif5l/Brad%20Azevedo%20-%20CV.pdf?dl=0"
                            rel="external"
                        >
                            <ResumeIcon /> Resume
                        </a>
                        <a href="https://github.com/brad2k/" rel="external">
                            <GitHubIcon /> GitHub
                        </a>
                    </p>
                </Group>
            </Centered>
        </Wrapper>
    </Layout>
)

export default SecondPage

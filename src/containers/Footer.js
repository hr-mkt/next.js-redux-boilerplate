import Link from 'next/link'
import styled from 'styled-components'
import {animated} from 'react-spring'
import {slideInBottom} from '../animations/animationType'
import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

const Footer = () => {
    const [toggle, setToggle] = useState(false)
    const anim = slideInBottom(toggle)

    return (
        <Container>
            <VisibilitySensor
                partialVisibility={true}
                onChange={(isVisible) => {
                    setToggle(isVisible)
                }}
            >
                <animated.div style={anim}>
                    <Contents>
                        <LeftComponent>
                            <StyledLink><Link href='/'>SHARE-CODE</Link> All right reserved.</StyledLink>
                        </LeftComponent>
                        <RightComponent>
                            <StyledLinkB><Link href='/site_policy'>・Site policy</Link></StyledLinkB>
                            <StyledLinkB><Link href='/site_policy#contact'>・Contact</Link></StyledLinkB>
                        </RightComponent>
                    </Contents>
                </animated.div>
            </VisibilitySensor>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 80px;
    background-color: #fff;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Contents = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px){
        flex-direction: column;
    }
`

const LeftComponent = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const RightComponent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px){
        width: 300px;
    }
`

const StyledLink = styled.div`
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #0057b8;

    a {
        text-decoration: none;
        color: #0057b8;
        font-size: 16px;
        margin-right: 10px;
    }
`
const StyledLinkB = styled.div`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: #0057b8;
    }
`


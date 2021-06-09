import Link from 'next/link'
import styled from 'styled-components'
import React from 'react'
import SensorAnimation from '../animations/SensorAnimation'

const Header = () => {
    return (
        <>
            <TrueContainer>
                <TitleContainer>
                    <SensorAnimation>
                        <StyledLink>
                            <Link href="/"></Link>
                        </StyledLink>
                    </SensorAnimation>
                </TitleContainer>
            </TrueContainer>
            <FakeContainer></FakeContainer>
        </>
    )
}

export default Header

const TrueContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: #0057b8;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    box-shadow: 0 0 3px 2px #5559;;
    z-index: 10;
`
const TitleContainer = styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: #fff;
        margin: 0 10px;
        font-size: 18px;
    }
`


const FakeContainer = styled.div`
    height: 60px;
`

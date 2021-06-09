import React, { useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setHeaderTitle } from '@home/features/common/app'
import Header from '../containers/Header'
import MetaHeader from '../containers/MetaHeader'
import Footer from '../containers/Footer'

export default function Index() {
    return (
        <Container>
            <Header />
            <MetaHeader />
            <Body>
                aaa
            </Body>
            <Footer />
        </Container>
    )
}

/**
 * component
 */
const Container = styled.div`
    height: 100%;
    width: 100%;
`

const Body = styled.div``

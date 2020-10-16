import { useDispatch, useStore } from 'react-redux'
import useInterval from '../lib/useInterval'
import Clock from '../components/clock'
import Counter from '../components/counter'
import Nav from '../components/nav'
import { TICK_UPDATE } from '../actions'
import {animated} from 'react-spring'
import {slideIn} from '../animations'
import { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

export default function Index() {
    const dispatch = useDispatch()

    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)

    // Tick the time every second
    useInterval(() => {
        dispatch({type: 'TICK_UPDATE'})
    }, 1000)

    const anim1 = slideIn(toggle1)
    const anim2 = slideIn(toggle2)
    const anim3 = slideIn(toggle3)

    return (
        <>
            <div style={{backgroundColor: '#aaa', height: 2000}}>aaaa</div>
            <VisibilitySensor
                partialVisibility={true}
                onChange={(isVisible) =>{setToggle1(isVisible)}}
            >
                <animated.div style={anim1}><Nav /></animated.div>
            </VisibilitySensor>
            <VisibilitySensor
                partialVisibility={true}
                onChange={(isVisible) =>{setToggle2(isVisible)}}
            >
                <animated.div style={anim2}><Clock/></animated.div>
            </VisibilitySensor>
            <VisibilitySensor
                partialVisibility={true}
                onChange={(isVisible) =>{setToggle3(isVisible)}}
            >
                <animated.div style={anim3}><Counter/></animated.div>
            </VisibilitySensor>
        </>
    )
}

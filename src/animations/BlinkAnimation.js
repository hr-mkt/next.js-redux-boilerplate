import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {useSpring, animated} from 'react-spring'

let prevStart = 0

const blink = (start, animation) => {
    if(!animation){return}
    if(prevStart === start){return}
    prevStart = start
    if(!start){return}
    return useSpring({
        from :{
            boxShadow: '0px 0px 0px 0px #fffdd0',
            borderRadius: '10px'
        },
        to: [
            {
                boxShadow: '0px 0px 10px 10px #fffdd0',
                borderRadius: '10px'
            },
            {
                boxShadow: '0px 0px 0px 0px #fffdd0',
                borderRadius: '10px'
            },
            {
                boxShadow: '0px 0px 10px 10px #fffdd0',
                borderRadius: '10px'
            },
            {
                boxShadow: '0px 0px 0px 0px #fffdd0',
                borderRadius: '10px'
            },
        ],
        config: { duration: 100 }
    })
}


const BlinkAnimation = (props) => {
    const anim = blink(props.start, props.animation)

    return (
        <animated.div style={anim}>
            {props.children}
        </animated.div>
    )
}

BlinkAnimation.propTypes = {
    children: PropTypes.object,
    start: PropTypes.bool
}


export default BlinkAnimation

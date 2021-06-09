import React, { useState } from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import {animated} from 'react-spring'
import animationType from './animationType'

const SensorAnimation = (props) => {
    const [toggle, setToggle] = useState(false)

    const anim = animationType[props.type] ? animationType[props.type](toggle) : animationType.slideInBottom(toggle)

    return (
        <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
                setToggle(isVisible)
            }}
        >
            <animated.div style={anim}>
                {props.children[0]}
            </animated.div>
        </VisibilitySensor>
    )
}

SensorAnimation.propTypes = {
    children: PropTypes.object,
    type: PropTypes.string
}


export default SensorAnimation

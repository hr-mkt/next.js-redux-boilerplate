import {useSpring} from 'react-spring'

export const slideIn = (toggle) => {
    return useSpring({
        from :{
            transform: 'translateX(-100px)',
            opacity: 0
        },
        to: {
            transform: toggle ? 'translateX(0px)' : 'translateX(-100px)',
            opacity: toggle ? 1 : 0
        }
    })
}



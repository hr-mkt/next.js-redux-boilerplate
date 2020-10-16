import * as prod from './configureStore.prod'
import * as dev from './configureStore.dev'
import getConfig from 'next/config'
const config = getConfig()

let configureStore
let preloadedState
console.log(config.NODE_ENV)
if (config.NODE_ENV === 'production') {
    configureStore = prod.configureStore
    preloadedState = prod.preloadedState
} else {
    configureStore = dev.configureStore
    preloadedState = dev.preloadedState
}

export {configureStore, preloadedState}

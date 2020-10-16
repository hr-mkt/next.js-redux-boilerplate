// import * as SigninMiddleware from './SigninMiddleware'

const mws = {
    // SigninMiddleware,
    MWS: {
        TICK_UPDATE: async (store, next, action) => {
            next({
                type: 'TICK',
                light: true,
                lastUpdate: Date.now(),
            })
        }
    }
}

const getMiddleware = (action) => {
    for (const middleware in mws) {
        if (mws[middleware][action]) { return mws[middleware][action] }
    }
    return null
}

export const middlewares = store => next => action => {
    const middleware = getMiddleware(action.type)
    if (!middleware) { return next(action) }
    return middleware(store, next, action)
}

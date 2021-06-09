import { createSlice } from '@reduxjs/toolkit'

const slicename = 'common/app'

/**
 * middleware
 */



/**
 * actionCreater
 */
const slice = createSlice({
    name: slicename,
    initialState: {
        sidebar: false,
        headerTitle: ''
    },
    reducers: {
        setSidebar: (state, action) => {
            state.sidebar = action.payload
        },
        setHeaderTitle: (state, action) => {
            state.headerTitle = action.payload
        },
    },
    extraReducers: {
    },
})

export const { setSidebar, setHeaderTitle } = slice.actions
export default slice

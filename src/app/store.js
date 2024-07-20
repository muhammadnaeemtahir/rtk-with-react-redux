import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')

import cakeRreducer from '../features/cake/cakeSlice'
import icecreamRreducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeRreducer,
        icecream: icecreamRreducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
import { configureStore } from '@reduxjs/toolkit';

import { cakeReducer } from "./feature/cake/cakeSlice";
import { icecreamReducer } from "./feature/icecream/icecreamSlice";
import { userReducer } from "./feature/user/userSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        cake: cakeReducer,
        icecream: icecreamReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export { store };
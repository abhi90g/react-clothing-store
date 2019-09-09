import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from '../redux/user/user.reducer'
import cartReducer from '../redux/cart/cart.reducer'
import directoryReducer from '../redux/directory/directory.reducer'
import shopReducer from '../redux/shop/shop.reducer'

// config for redux-presist to store cart in local storage
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)

import { combineReducers } from "redux"
export const initialState = {
    total: 0,
    cart: []

}

export const updateCart = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_TOTAL":
            return ({ total: state.total })
        case "UPDATE_CART":
            return ({ cart: action.cart })
        default:
            return (state)
    }

}

export const rootReducer = combineReducers({ updateCart })


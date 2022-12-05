export const updateTotal = (amount) => {
    return {

        type: "UPDATE_TOTAL",
        payload: amount


    }
}

export const updateCart = (cartData) => {
    return {

        type: "UPDATE_CART",
        cart: cartData

    }
}
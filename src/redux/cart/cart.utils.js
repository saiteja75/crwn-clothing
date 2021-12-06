export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if(existCartItem) {
        return cartItems.map(
            cartItem => cartItem.id == cartItemToAdd.id ? {...cartItem, quantity:cartItem.quantity+1}: cartItem
        );
    }

    return [...cartItems,{...cartItemToAdd,quantity:1}];
} 

export const clearItemFromCart = (cartItems, cartItemToDelete) => {
    return cartItems.filter(cartItem => cartItem.id != cartItemToDelete.id);
}

export const removeItemFromCart = (cartItems, cartItemToDelete) => {
    const existCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDelete.id)

    if(existCartItem && cartItemToDelete.quantity > 1) {
        return cartItems.map(
            cartItem => cartItem.id == cartItemToDelete.id ? {...cartItem, quantity:cartItem.quantity-1}: cartItem
        );
    }

    return clearItemFromCart(cartItems, cartItemToDelete);
}
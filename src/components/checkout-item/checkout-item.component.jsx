import React from "react";
import { clearCartItem,addItem,removeItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, clearCartItem, addItem, removeItem}) => {
    const {name, quantity, price, imageUrl} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='delete' onClick={() => clearCartItem(cartItem)}>&#10006;</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearCartItem: (item) => dispatch(clearCartItem(item)),
    addItem:(item) => dispatch(addItem(item)),
    removeItem:(item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
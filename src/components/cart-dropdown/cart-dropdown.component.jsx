import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";


import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        {cartItems.map((item) => <CartItem key={item.id} item={item}/>)}
        <CustomButton>Go To CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);


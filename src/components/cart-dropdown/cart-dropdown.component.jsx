import React from "react";
import CustomButton from "../custom-button/custom-button.component";


import './cart-dropdown.styles.scss';

const CartDropDown = ({hidden}) => (
    <div className={`cart-dropdown ${hidden ? 'hidden': ''}`}>
        <div className='cart-items'/>
        <CustomButton>Go To CHECKOUT</CustomButton>
    </div>
)

export default CartDropDown;


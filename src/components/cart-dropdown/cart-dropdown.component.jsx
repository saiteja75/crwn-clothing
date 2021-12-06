import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCart } from '../../redux/cart/cart.actions';


import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        {
            cartItems.length ?
            cartItems.map((item) => <CartItem key={item.id} item={item}/>) :
            <span className='empty-message'>Your Cart is Empty</span>
        }
        <CustomButton onClick={()=> {
            history.push('/checkout')
            dispatch(toggleCart())
            }}>Go To CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));


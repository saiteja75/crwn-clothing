import React from "react";
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import './header.styles.scss';

const Header = ({ currentUser,hidden }) => {
    return (
        <div className='header'>
            <Link to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link to='/' className='option'>
                    CONTACT US
                </Link>
                {
                    currentUser ?
                    (<div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>)
                    : 
                    (<Link className='option' to='/signin' className='option'>
                        SIGN IN
                    </Link>)
                }
                <CartIcon/>
            </div>
            {
                hidden?
                null:
                <CartDropDown/>
            }
        </div>
    )
}

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);
import React from 'react';
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../state/cart/cart.actions';
import { selectCartItemsCount } from '../../state/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  //selector
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext'; 

const Cart = () => {
    const { cartItems, food_list, removeFromCart, gettotalCartAmount } = useContext(StoreContext);

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index}>
                                <div className="cart-items-title cart-items-item">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null; // Add this to avoid returning undefined
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total :</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Sub Total :</p>
                            <p>${gettotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee :</p>
                            <p>$2</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total :</b>
                            <b>${gettotalCartAmount() + 2}</b>
                        </div>
                        <button>Proceed To Checkout</button>
                    </div>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promocode, enter it here.</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder='promocode' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
 
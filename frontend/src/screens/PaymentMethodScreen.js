import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartActions';



export default function PaymentMethodScreen() {
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;
    if (!shippingAddress) {
        navigate('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('MoMo');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate('/placeorder');
    }


    return <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <form className='form' onSubmit={submitHandler}>
            <div>
                <h1>Payment Method</h1>
            </div>
            <div>
                <div className='paymentType'>
                    <input type="radio" id='momo' value="Momo" name="paymentMethod" required 
                        onChange={e => setPaymentMethod(e.target.value)}></input>
                    <label htmlFor='momo'>Momo</label>
                </div>
            </div>
            <div>
                <div className='paymentType'>
                    <input type="radio" id='paypal' value="Paypal" name="paymentMethod" required checked
                        onChange={e => setPaymentMethod(e.target.value)}></input>
                    <label htmlFor='paypal'>Paypal</label>
                </div>
            </div>
            <div>
                <button className='primary' type='submit'>Continue</button>
            </div>
        </form>
    </div>;
}

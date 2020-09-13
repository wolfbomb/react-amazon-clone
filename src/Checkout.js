import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import userEvent from '@testing-library/user-event';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                {/* <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''></img> */}
                <img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/primeday/PD18/AAFeedback/Bruno/1500x300_Starts_Banner_v2._CB474351192_.gif' alt=''></img>
                {/* <img className='checkout__ad' src='https://www.tothineownstylebetrue.com/wp-content/uploads/2019/07/BANNER_1500x375_d_en.jpg' alt=''></img> */}
                <div>
                    <h3>Hello, {!user ? 'Guest' : user.email}</h3>
                    <h2 className='checkout__title'>Your Shopping Basket {basket.length === 0 ? ' is empty.' : ''}</h2>
                    {basket.map( item =>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        ></CheckoutProduct>
                    ))}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal></Subtotal>
            </div>
        </div>
    )
}

export default Checkout;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51NUbnQANXxZ024651Ur09rdtcQRUyr4fRV3gantSHhsNjpaaRfM6c8shqmqjVqxAYekaZMOn819H7mbRFUcyfkpG00lDyJbZ59';

const onToken = token => {
    console.log(token);
    alert('Payment Succesful');
}

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Group twenty(20) Ltd.'
            billingAddress
            shippingAddress
            image='http://www.w3.org/2000/svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
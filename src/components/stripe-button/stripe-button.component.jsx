import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishablekey = 'pk_test_M97baobBTK4gqqjqmXIxVIGl00eGIan8Bu'
    const onToken = token => {
        console.log(token)
        alert ('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Clothing Store Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;
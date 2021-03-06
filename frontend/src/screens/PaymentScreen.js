import React, { useState} from 'react'
import { useNavigate,useLocation} from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod} from '../actions/cartActions'

const PaymentScreen = ({history, }) => {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart
    const navigate = useNavigate()

    if(!shippingAddress.address){
      navigate('/shipping')

    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

        const submitHandler = (e) => {
            e.preventDefault()
            navigate('/placeOrder')
          }

  return (
    <FormContainer>
        <CheckoutSteps step1 step2 step3/>
        <h1>
            Payment Method
        </h1>
        <Form onSubmit={submitHandler}>
        <Form.Group>
         
        <Col>
         
  
          <Form.Check  type='radio' label='Paypal or Credit Card' id='PayPal'
           name='paymentMethod'
           value={paymentMethod} checked onChange={
            (e) => setPaymentMethod(e.target.value)
          }>
              </Form.Check>
        

        </Col>
        </Form.Group>

        <br>
        </br>
        <Button type='submit' variant='primary'>
            Continue
        </Button>
        </Form>
    </FormContainer>
  )
}

export default PaymentScreen

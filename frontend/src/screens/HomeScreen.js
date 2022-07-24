import React, {useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import { useParams } from 'react-router-dom'

const HomeScreen = () => {
//const [products, setProducts] = useState([])
const dispatch = useDispatch()
const params = useParams()
const keyword = params.keyword

const productList = useSelector(state => state.productList)
const {loading, error, products} = productList

useEffect(() => {
  dispatch(listProducts(keyword))
}, [dispatch, keyword])

  return (
    <>
    <h1>Latest Offers:</h1>
    <h3>Orders over $200.00 shipped <strong> FREE</strong> </h3>
    {loading ? <Loader />
     : error 
     ? <Message>{error}</Message> : 
    <Row>
        {products.map(product => 
            <Col key ={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
            </Col>)}
    </Row>}
    

    </>
  )
}

export default HomeScreen
import React, {useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ProductCarousel from '../components/ProductCarousel'

const HomeScreen = () => {
//const [products, setProducts] = useState([])
const dispatch = useDispatch()
const params = useParams()
const keyword = params.keyword
const pageNumber = params.pageNumber || 1

const productList = useSelector(state => state.productList)
const {loading, error, products, page, pages} = productList

useEffect(() => {
  dispatch(listProducts(keyword, pageNumber))
}, [dispatch, keyword, pageNumber])

  return (
    <>
    {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'>Go Back</Link>}
    <h1>Orders over $200.00 shipped <strong> FREE</strong> </h1>
    {loading ? <Loader />
     : error 
     ? <Message>{error}</Message> : (
      <>
    <Row>
        {products.map(product => 
            <Col className='align-items-stretch d-flex'
            key ={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
            </Col>)}
    </Row>
        <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
    </>
    )}
    

    </>
  )
}

export default HomeScreen



import React from 'react'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'


import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'

import { toast } from 'react-toastify'

import '../../styles/product-cart.css'

const ProductCart = ({ item }) => {

    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,

        }))

        toast.success('Product added successfully')
    }



    return (
        <Col lg='3' md='4' className='mb-2'>
            <div className='product__item'>
                <div className='product__img'>
                    <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt='' />
                </div>
                <div className='p-2 product__info'>
                    <h3 className='product__name'><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                    <p>{item.category}</p>
                </div>
                <div className="product__cart-bottom d-flex align-items-center justify-content-between b-2">
                    <span className='price'>${item.price}</span>
                    <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}><i className='ri-add-line'></i></motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCart
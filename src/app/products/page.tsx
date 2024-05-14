'use client'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './products.module.css'
import { Product } from '../../interfaces/Product'

const Products = () => {
    const [products, setProducts] = useState<Product[]>([])
    
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('http://localhost:3000/products')
            setProducts(data)
        }
        fetchProducts()
    }, [])

    const renderProducts = () => {
        return products.map((product, i) => {
            return <ProductCard key={product.id} product={product} />
        })
    }
    return (
        <>
            <Navbar />
            <div className={style.products}>
                {renderProducts()}
            </div>
        </>
    )
}

export default Products
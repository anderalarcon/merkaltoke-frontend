import Image from 'next/image'
import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
        <Image src={product?.imageurl} width={400} height={400} alt=''/>
        <div>
            <h1>{product.nombre}</h1>
            <p>{product.descripcion}</p>
            <p>{product.precio}</p>
        </div>
    </div>
  )
}

export default ProductCard
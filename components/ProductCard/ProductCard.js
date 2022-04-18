import React from 'react';
import Image from 'next/image'
import {productCard, price, name, description} from './styles.module.scss'

function ProductCard ({children, product, ...props})  {
  const {productName, productPrice, productDescription, imageUrl, uid}= {...product}
  return (
    <div className={productCard}>
    <header>
      <Image
        src={imageUrl}
        alt={productName}
        width="100%"
        height="100%"
        quality={50}
        layout="responsive"
      />
    </header>
    <h2 className={name}>{productName}</h2>
    <p className={price}>${productPrice}</p>
    <p className={description}>{productDescription}</p>
    <footer>
      <form action="/api/checkout" method="POST">
        <input type="hidden" name="uid" value={uid}/>
        <button type="submit">Buy Now</button>
      </form>
    </footer>
    </div>
  )
}

export default ProductCard
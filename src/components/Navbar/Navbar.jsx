import Image from 'next/image'
import React from 'react'
import LogoNike from '../../../public/assets/svgs/nike.svg'
import ShoppingCart from '../../../public/assets/svgs/shoppingcart.svg'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Image src={LogoNike} width={100} height={100} alt='Logo Nike' className={styles.navbar_logo}></Image>
            <div className={styles.navbar_mid}>
                <Link href={"/home"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/products"}>Products</Link>
            </div>
            <div className={styles.navbar_right}>
                <Image src={ShoppingCart} width={30} height={30} alt='Shopping Cart' className={styles.navbar_cart}></Image>
            </div>
        </nav>
    )
}

export default Navbar
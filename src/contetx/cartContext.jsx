import React, { useContext, useEffect, useState } from "react"
import { shopProducts } from "../components/ArrayProducts/arrayProducts";

const Products = React.createContext()

export function ProductsProvider ({children}){

    const [products, setProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])
const[isCartOpen, setIsCartOpen] = useState(false)

useEffect(() =>{
    setTimeout(() => {
        setProducts(shopProducts);
      }, 2000);
}, [])

const openCart = () => {
    setIsCartOpen(!isCartOpen)
}

const isInCart = (item) => {
return cartProducts?.findIndex(product => product.id === item.id)
}

const addToCart = (product) =>{
if  (isInCart (product) === -1){
    setCartProducts (cartProducts.concat(product))
}}

const deleteProduct = (item) =>{
    setCartProducts(cartProducts.filter (product => product.id !== item.id))
}

console.log (cartProducts)
    return (
        <Products.Provider value={{products, isCartOpen, openCart, addToCart, cartProducts, addToCart, deleteProduct}}>
        {children}
        </Products.Provider>
    )
}

export function useIsCartOpen(){
    return useContext(Products).isCartOpen
}
export function useCartOpen(){
    return useContext(Products).openCart
}
export function useAddToCart(){
    return useContext(Products).addToCart
}
export function useCartProducts(){
    return useContext(Products).cartProducts
}
export function useDeleteProducts(){
    return useContext(Products).deleteProduct
}

export default Products
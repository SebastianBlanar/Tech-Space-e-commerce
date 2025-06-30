import { createContext, useEffect, useState } from "react"

export const CartContext = createContext(null)

export function CartProvider({children}){
    const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart,setCart] = useState(initialCart) 
    
    const addItem = (item) => {
        setCart([...cart , item])
    }
    const removeItem = (id) => {
        setCart(cart.filter(i => i.id !== id))
    }

    const clearCart = () => setCart([])

    const isInCart = (id) => {
        return cart.some(i => i.id === id)
    }
    const updateQuantity = (item) => {
        setCart(cart.map(i => 
            i.id == item.id ? { ...i, quantity: item.quantity } : i
        ));
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    

    return(
        <CartContext.Provider value={{
          cart,
          setCart,
          addItem,
          isInCart,
          updateQuantity,
          clearCart,
          removeItem
        }}>

            {children}
        </CartContext.Provider>
    )
}
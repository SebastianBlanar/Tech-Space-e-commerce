import { ItemQuantitySelector } from "./ItemQuantitySelector";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export function ItemDetail({ item }) {
    const { addItem , isInCart , updateQuantity} = useContext(CartContext)
    const [quantity,setQuantity] = useState(1)
    const handleClick = () => {
        isInCart(item.id) ? updateQuantity({...item,quantity : quantity}) : addItem({...item , quantity : quantity })  
    }
    return (
        item && (
            <>
            <div className="flex flex-col items-center max-w-lg mx-auto p-6 bg-gradient-to-br from-[#2d1b1b] to-[#1a0f0f] rounded-lg shadow-lg max-h-full">
                <img
                    src={item.image}
                    alt={item.name}
                    className=" w-1/2 h-auto mb-4 rounded-lg shadow-md"
                />
                <h1 className="text-2xl font-bold mb-2 text-gray-200">{item.name}</h1>
                <h3 className="text-lg font-semibold mb-4 text-gray-300 text-center">{item.title}</h3>
                <p className="text-xl font-semibold text-gray-200">${item.price}</p>
                <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
                <button 
                    onClick={handleClick} 
                    className="px-4 py-2 border border-transparent bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Añadir al carrito
                </button>
            </div>
            <Link to="/checkout" className="flex justify-center items-center mt-10">
            <button 
                className="text-2xl px-4 py-2 border border-transparent bg-gradient-to-br from-[#2d1b1b] to-[#1a0f0f] mb-4 text-white rounded-lg shadow-md focus:outline-none">
                Ir al checkout
            </button>

            </Link>
            </>
        )
    );
    
}

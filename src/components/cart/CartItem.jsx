import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FiTrash } from "react-icons/fi";

export function CartItem({ item }){
    const {removeItem} = useContext(CartContext);

    return (
        <div className="flex justify-between py-2 border-b last:border-b-0">
            <span className="flex-1">{item.name}</span>
            <span className="flex-1 text-right">${item.price}</span>
            <span className="flex-1 text-right">{item.quantity}</span>
            <button 
                onClick={() => removeItem(item.id)} 
                className="ml-4 text-red-600 hover:text-red-800"
                aria-label="Quitar producto"
            >
                <FiTrash className="w-6 h-6" />
            </button>
        </div>
    );
};

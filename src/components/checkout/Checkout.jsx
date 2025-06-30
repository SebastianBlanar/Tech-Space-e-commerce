import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { CartItem } from "../cart/CartItem";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import { FormComponent } from "./FormComponent";

export function Checkout() {
    const MySwal = withReactContent(Swal);
    const {cart} = useContext(CartContext)
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const [orderConfirmed,setOrderConfirmed] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        if( cart.length == 0 && ! orderConfirmed){
            MySwal.fire({
                title: <p>Su carrito está vacío, agregue un producto antes de continuar.</p>,
                icon: 'error',
            }).then(()=> {
                navigate("/")
            });
        }
    },[cart])

        return (
            <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            <div className="bg-gradient-to-br from-[#2d1b1b] to-[#1a0f0f] text-white shadow-md rounded-lg p-4 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Resumen del Pedido</h2>
                <div className="border-b pb-4">
                    <div className="flex font-semibold border-b pb-2">
                        <span className="flex-1">Producto</span>
                        <span className="flex-1 text-right">Precio</span>
                        <span className="flex-1 text-right">Cantidad</span>
                    </div>
                    {cart.map(i => <CartItem key={i.id} item={i} />)}

                    <div className="flex justify-between py-2 font-semibold">
                        <span>Total</span>
                        <span>${total}</span>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-[#2d1b1b] to-[#1a0f0f] text-white shadow-md rounded-lg p-4 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Información del Cliente</h2>
                <FormComponent setOrderConfirmed={setOrderConfirmed} />
            </div>
        </div>
        );
    };
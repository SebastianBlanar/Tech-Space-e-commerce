export function ItemQuantitySelector({ quantity ,setQuantity }){

    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () => quantity != 1 && setQuantity(quantity - 1);
    return(
        <>
            <div className="flex justify-between items-center gap-3">
            <button className="bg-green-600 text-white text-base cursor-pointer shadow-[0px_4px_6px_rgba(0,0,0,0.1)] px-5 py-2.5 rounded-[5px] border-[none]" onClick={handleIncrement}>+</button>
            <button className="bg-red-600 text-white text-base cursor-pointer shadow-[0px_4px_6px_rgba(0,0,0,0.1)] px-5 py-2.5 rounded-[5px] border-[none]" onClick={handleDecrement}>-</button>
            </div>
            <p className=" text-4xl text-gray-300">{quantity}</p>
            
        </>
    )

}
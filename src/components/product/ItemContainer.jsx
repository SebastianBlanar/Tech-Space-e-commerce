import { Link } from "react-router-dom";

export function ItemContainer({ item }) {
    return (
        <Link
            to={`/item/${item.id}`}
            className="block p-4 my-4 bg-gradient-to-br from-[#2d1b1b] to-[#1a0f0f] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
            aria-label={`Ver detalles de ${item.name}`}
        >
            <div className="flex flex-col items-center m-8">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48  rounded-md mb-4"
                />
                <h3 className="text-sm font-medium text-gray-300 mb-1">{item.category}</h3>
                <h1 className="text-lg font-semibold mb-2 text-white">{item.name}</h1>
                <p className="text-md font-bold mb-2  text-gray-200">${item.price.toFixed(2)}</p>
                <button
                    className="px-4 py-2 border border-transparent bg-[#fb923c] hover:bg-[#ea580c] text-white rounded-lg shadow-md focus:outline-none"
                    aria-label={`Ver detalle de ${item.name}`}
                >
                    Ver detalle
                </button>
            </div>
        </Link>
    );
}

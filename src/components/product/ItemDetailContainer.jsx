import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import ClipLoader from 'react-spinners/ClipLoader';
import { getItemById } from "../../firebase/firebase";

export function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const { itemId } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const itemData = await getItemById(itemId);
                setItem(itemData);
            } catch (error) {
                console.log('Error getting document:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchItem();
    }, [itemId]);

    if (isLoading) {
        return <div className="flex justify-center items-center mt-10"><ClipLoader color="#36d7b7" size={50} /></div>
    }

    return <ItemDetail item={item} />
}

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from './ItemList';
import { CategoryContext } from "../../context/CategoryContext";
import ClipLoader from 'react-spinners/ClipLoader';
import { getItems } from "../../firebase/firebase";

export function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const { setCurrentCategory } = useContext(CategoryContext);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const fetchedItems = await getItems(id);
                setItems(fetchedItems);
                setCurrentCategory(id || null);
            } catch (error) {
                console.log('Error searching items:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchItems();
    }, [id, setCurrentCategory]);

    if (isLoading) {
        return <div className="flex justify-center items-center mt-10"><ClipLoader color="#36d7b7" size={50} /></div>;
    }

    return (
        <section className="flex justify-evenly items-center flex-wrap gap-10">
            <ItemList items={items} />
        </section>
    );
}

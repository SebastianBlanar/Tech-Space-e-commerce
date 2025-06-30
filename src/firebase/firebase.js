
import { collection,getFirestore, doc, getDoc, getDocs, query, where } from "firebase/firestore";

export const getItems = async (categoryId) => {
    const db = getFirestore();
    let itemsCollection;

    if (categoryId) {
        itemsCollection = query(collection(db, 'items'), where('category', '==', categoryId));
    } else {
        itemsCollection = collection(db, 'items');
    }

    const snapshot = await getDocs(itemsCollection);
    if (snapshot.size === 0) {
        throw new Error("No items found");
    }

    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getItemById = async (itemId) => {
    const db = getFirestore();
    const itemDoc = doc(db, 'items', itemId);
    const snapshot = await getDoc(itemDoc);
    
    if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() };
    } else {
        throw new Error("Item not found");
    }
};
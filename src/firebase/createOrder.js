import { collection, addDoc, serverTimestamp,getFirestore } from "firebase/firestore";

export async function createOrder(customer, items, total) {
  const db = getFirestore();
  const order = {
    customer,
    items,
    total,
    date: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, "orders"), order);
  return docRef.id;
}

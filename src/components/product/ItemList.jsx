import { ItemContainer } from "./ItemContainer";

export function ItemList({ items }) {
    return (
        <>
        {
            items.length > 0 && (
                items.map(i => <ItemContainer key={i.id} item={i} />)
            ) 
        } 
        </>
            )
}
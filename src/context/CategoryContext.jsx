import { createContext, useState } from "react";

export const CategoryContext = createContext(false);

export function CategoryProvider({ children }) {
    const [currentCategory, setCurrentCategory] = useState(null);
    return (
        <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
            {children}
        </CategoryContext.Provider>
    );
}

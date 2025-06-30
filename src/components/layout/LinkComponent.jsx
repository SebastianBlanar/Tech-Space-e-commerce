import { Link } from "react-router-dom";
import { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";

export function LinkComponent({ linkUrl, linkText, categoryId }) {
    const { currentCategory } = useContext(CategoryContext);
    const isCurrentCategory = categoryId === currentCategory;

    return (
        <li className="inline-block">
            <Link 
                to={linkUrl} 
                className={`relative font-medium ${isCurrentCategory ? "text-white" : "text-gray-300"} hover:text-white`}
            >
                {linkText}
                {isCurrentCategory && (
                    <span 
                        className="absolute left-[15%] bottom-[-4px] w-[70%] h-[3px] bg-white rounded-full transition-all duration-300 transform scale-x-100"
                    />
                )}
            </Link>
        </li>
    );
}

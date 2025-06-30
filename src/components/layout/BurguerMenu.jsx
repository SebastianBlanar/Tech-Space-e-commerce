import { Menu } from "lucide-react";

export function BurguerMenu({ isOpen, setIsOpen }) {
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <button
            className="text-white md:hidden"
            onClick={handleClick}
        >
            <Menu className="w-6 h-6" />
        </button>
    )
}


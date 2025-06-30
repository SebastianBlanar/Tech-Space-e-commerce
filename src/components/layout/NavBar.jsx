import { CartWidget } from "../cart/CartWidget";
import { useState } from "react";
import {BurguerMenu} from "./BurguerMenu";
import { LinkComponent } from "./LinkComponent";
import { Link, useLocation } from "react-router-dom";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation()
    const isFixedPath =  location.pathname == "/" || location.pathname.includes("/category")
    return (
        <nav className={`${isFixedPath ? 'fixed' : ''} top-0 flex flex-wrap justify-between items-center p-8 text-white w-screen bg-custom-gradient z-50 md:flex-nowrap`}>
            <Link to="/">
                <h1 className="text-2xl font-bold text-white ">TechSpace</h1>
            </Link>
            
            <BurguerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            <ul className={`flex flex-row order-3 mx-auto md:mx-0 gap-6 mt-3 md:mt-0 md:gap-0  md:space-y-0 md:space-x-4 text-white :order-2  ${isOpen ? 'block' : 'hidden'} lg:block`}>
                <LinkComponent linkUrl="/category/Smartphones" linkText="Celulares" categoryId="Smartphones"/>
                <LinkComponent linkUrl="/category/Notebooks" linkText="Notebooks" categoryId="Notebooks" />
                <LinkComponent linkUrl="/category/Accesorios" linkText="Accesorios" categoryId="Accesorios" />
            </ul>
            <div className="lg:order-3">
                <CartWidget />
            </div>
        </nav>
    );
}

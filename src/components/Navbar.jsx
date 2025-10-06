import React, { useContext } from 'react';
import { FcShop } from "react-icons/fc";
import { MdShoppingCart } from "react-icons/md";
import { NavLink, Link} from 'react-router-dom';
import { products_categories } from '../data/products';
import { ProductContext } from '../context/ProductContext';

export default function Navbar(){

    const {invoice} = useContext(ProductContext);

    const isActive = (element) => {
        return element.isActive ? 'text-blue-600' : ''
    }
    return (
        <div className='w-full h-20 border shadow-lg flex items-center justify-between px-8 bg-white'>
            <NavLink className='flex flex-col items-center' to={'/'}>
                <FcShop className='text-4xl'/>
            </NavLink>
            <ul className='flex items-center gap-5 lg:gap-10'>
                {
                    products_categories.map(category => {
                        return (
                            <li key={category.value}><NavLink className={isActive} to={`/${category.value}`}>{category.label}</NavLink></li>
                        )
                    })
                }

            </ul>
            <Link className=' relative' to={'/cart'}>
                <MdShoppingCart className='text-2xl'/>
                {
                    invoice?.count > 0 &&
                    <div className=' absolute -top-2 -right-2 w-4 h-4 text-xs bg-blue-700 text-white flex items-center justify-center rounded-full'>
                    {invoice?.count}
                    </div>
                }
            </Link>
        </div>
    )
}
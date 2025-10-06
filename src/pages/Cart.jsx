import React, { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { MdShoppingCart } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";

export default function Cart(){
    const {cart, invoice, removeCart, setCart, setInvoice, addCart} = useContext(ProductContext);
    const navigate = useNavigate();
    const placedOrder = () => {
        setCart([]);
        setInvoice({count:0, subTotal:0});
        navigate('/success');
    }
    return(
        <div>
            {
                cart.length > 0 ?
                <div>
                   {
                    cart.map(product => {
                        return(
                            <div key={product.id} className='shadow-md p-4 flex items-center justify-between gap-1'>
                                <img src={product.image} className='w-[120px] h-[120px] object-contain'/>
                                <div className='flex flex-col gap-2 w-2/6'>
                                    <p className='font-bold'>{product.name}</p>
                                    <p className='text-xs'>Quantity: {product.quantity}</p>
                                </div>
                                <p className='font-semibold'>${product.price}</p>
                                <IoIosRemoveCircleOutline className='text-red-600 text-2xl cursor-pointer' onClick={() => removeCart(product)}/>
                                <CiCirclePlus className='text-red-600 text-2xl cursor-pointer' onClick={() => addCart(product)}/>
                            </div>
                        )
                    })
                   }
                   <div className='flex flex-col items-end gap-3 py-4 pr-5'>
                    <p className='font-bold'>Subtotal ({invoice.count} {invoice.count > 1 ? 'items' : 'item'}): ${invoice.subTotal.toFixed(2)} </p>
                    <button className='bg-blue-600 text-s text-white p-2 w-[200px] rounded-md cursor-pointer' onClick={placedOrder}>Place Order</button>
                    </div> 
                </div>
                :
                <div className='flex items-center text-2xl justify-center p-4 gap-2 '>
                    <span>Empty</span>
                    <MdShoppingCart className='text-2xl' />
                    <Link className='text-blue-600' to={'/'}>Add Products</Link>
                </div>
            }
        </div>
    )
}
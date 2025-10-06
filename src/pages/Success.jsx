import React from 'react'
import { MdDoneOutline } from "react-icons/md";

export default function Success(){
    return(
        <div className='flex items-center font-bold gap-2 text-2xl'><MdDoneOutline className='text-green-500 size-2/5 lg:size-1/12'/>Order placed successfully!</div>
    )
}
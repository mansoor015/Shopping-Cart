import {Outlet, useParams} from 'react-router-dom';
import Navbar from './components/Navbar';
import { useEffect, useContext} from 'react';
import { ProductContext } from './context/ProductContext';
function App() {

  const {filteredProducts} = useContext(ProductContext);
  const {category} = useParams();
  useEffect(() => {filteredProducts(category)}, [category])

  return(

    <div className=' min-h-screen h-auto bg-slate-200'>
      <Navbar/>
      <div className='w-[90%] m-auto my-4 bg-white lg:w-[70%]'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromWishlist } from '../../redux/wishlistSlice';
import Layout from '../../components/layout/Layout';
import { toast } from 'react-toastify';

function Wishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist);

  const removeFromWishlist = (product) => {
    dispatch(deleteFromWishlist(product));
    toast.success('Removed from wishlist');
  };

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems])
  
  return (
    <Layout>
      <div className="container mx-auto pt-5 mb-[40%]">
        <h1 className="text-3xl font-semibold text-gray-800">Wishlist</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
              <img src={item.imageUrl} alt={item.title} className="h-32 w-full object-cover  sm:w-40" />
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                <p className="mt-2 text-gray-600">${item.price}</p>
                <button onClick={() => removeFromWishlist(item)} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Wishlist;
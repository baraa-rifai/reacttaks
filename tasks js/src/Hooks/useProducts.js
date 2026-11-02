import { useState } from 'react';
import toast from 'react-hot-toast';
export const useProducts = () => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
    const [product, setProduct] = useState({});

  const getAllProducts = async () => {
    try {
      const products = JSON.parse(localStorage.getItem("products")) || [];
      setProducts(products);
    } catch (error) {
      toast.error("error");
      console.log(error);
      return ;
    
    }
  };
  const deleteProduct = async (id) => {
    try {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
        localStorage.setItem("products", JSON.stringify(newProducts));
        toast.success(" deleted successfully");
    }
    catch (error) {
        toast.error("error");
        console.log(error);
        return ;
    }
};
const getProductById = (id) => {
  try {
    const product = products.find((product) => product.id === id);
    setProduct(product)
  }
  catch (error) {
    toast.error("error");
    console.log(error);
    return ;
  }
return { products , deleteProduct, getProductById , product};
};
}
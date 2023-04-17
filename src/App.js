import Menu from './components/Menu';
import React, { useState } from 'react'
import { CollectionProduct } from './components/CollectionProduct';
import CreateProduct from './components/CreateProduct';
import CreateUser from './components/CreateUser';
import RegisterProduct from './components/RegisterProduct';
import BuyProducts from './components/BuyProducts';
import { productsData } from './data/productsData';
import { usersData } from './data/usersData';

function App() {

  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
  const [isCreateProductsOpen, setIsCreateProductsOpen] = useState(false);
  const [isRegisterProductsOpen, setIsRegisterProductsOpen] = useState(false);
  const [isBuyProductsOpen, setIsBuyProductsOpen] = useState(false);
  const [products, setProducts] = useState(productsData);
  const [users, setUsers] = useState(usersData);
  const [total, setTotal] = useState(0);

  return (
    <>
      <Menu
        products={products}
        isBuyProductsOpen={isBuyProductsOpen}
        setIsCreateUserOpen={setIsCreateUserOpen}
        setIsCreateProductsOpen={setIsCreateProductsOpen}
        setIsRegisterProductsOpen={setIsRegisterProductsOpen}
        setIsBuyProductsOpen={setIsBuyProductsOpen}
        setProducts={setProducts}
        setTotal={setTotal}
      />

      <CollectionProduct
        products={products}
        setProducts={setProducts}
        total={total}
        setTotal={setTotal}
      />

      <CreateUser
        isCreateUserOpen={isCreateUserOpen}
        setIsCreateUserOpen={setIsCreateUserOpen}
        users={users}
        setUsers={setUsers}
      />

      <CreateProduct
        isCreateProductsOpen={isCreateProductsOpen}
        setIsCreateProductsOpen={setIsCreateProductsOpen}
        setProducts={setProducts}
        products={products}
      />

      <RegisterProduct
        isRegisterProductsOpen={isRegisterProductsOpen}
        setIsRegisterProductsOpen={setIsRegisterProductsOpen}
        setProducts={setProducts}
        products={products}
      />

      <BuyProducts
       isBuyProductsOpen={isBuyProductsOpen} 
       setIsBuyProductsOpen={setIsBuyProductsOpen}
       total={total}
       setProducts={setProducts}
       products={products}
       setTotal={setTotal}
      />
    </>
  );
}

export default App;

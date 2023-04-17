import Menu from './components/Menu';
import React, { useState } from 'react'
import { CollectionProduct } from './components/CollectionProduct';
import CreateProduct from './components/CreateProduct';
import CreateUser from './components/CreateUser';
import RegisterProduct from './components/RegisterProduct';
import { productsData } from './data/productsData';
import { usersData } from './data/usersData';

function App() {

  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
  const [isCreateProductsOpen, setIsCreateProductsOpen] = useState(false);
  const [isRegisterProductsOpen, setIsRegisterProductsOpen] = useState(false);
  const [products, setProducts] = useState(productsData);
  const [users, setUsers] = useState(usersData);

  return (
    <>
      <Menu
        setIsCreateUserOpen={setIsCreateUserOpen}
        setIsCreateProductsOpen={setIsCreateProductsOpen}
        setIsRegisterProductsOpen={setIsRegisterProductsOpen}
        products={products}
      />

      <CollectionProduct
        products={products}
        setProducts={setProducts}
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
    </>
  );
}

export default App;

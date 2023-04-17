import { Modal, InputNumber, Input, Alert } from 'antd';
import React, { useState } from 'react'

function CreateProduct(props) {

    const [inputNameProduct, setInputNameProduct] = useState('');
    const [inputValueProduct, setInputValueProduct] = useState(0);
    const [inputQuantity, setInputQuantity] = useState(0);
    const [inputUrlProduct, setInputUrlProduct] = useState('');


    const handleOk = () => {
        props.setProducts([...props.products,
        {
            id: props.products.length + 1,
            img: inputUrlProduct,
            nameProduct: inputNameProduct,
            price: inputValueProduct,
            quantity: inputQuantity,
            quantityAdded : 0
        },]);

        clearInputs();
        props.setIsCreateProductsOpen(false);
    };

    const clearInputs = () => {
        setInputNameProduct('');
        setInputUrlProduct('');
        setInputValueProduct(0);
    }

    const handleCancel = () => {
        clearInputs();
        props.setIsCreateProductsOpen(false);
    };

    const onChange = (value) => {
        setInputValueProduct(value);
    };

    const onChangeInputQuantity = (value) => {
        setInputQuantity(value);
    };

    return (
        <Modal
            title="Create Product"
            open={props.isCreateProductsOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okText='Create'
        >
            <Input placeholder="Product Name" onChange={(e) => setInputNameProduct(e.target.value)} />
            <br /><br />
            <Input placeholder="Url from image page " onChange={(e) => setInputUrlProduct(e.target.value)} />
            <br />
            <a href="https://unsplash.com/es" target="_blank">Find your image here</a>
            <br /><br />
            <InputNumber
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                onChange={onChange}
                placeholder="Product Value"
                min={0}
                className='input-number-create-products'
            />
            <br /><br />
            <InputNumber
                onChange={onChangeInputQuantity}
                placeholder="Quantity Value"
                min={1}
                className='input-number-create-products'
            />
        </Modal>
    );
}

export default CreateProduct;
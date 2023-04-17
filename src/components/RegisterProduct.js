import { Modal, InputNumber, Input, Alert } from 'antd';
import React, { useState } from 'react'

function RegisterProduct(props) {

    const [inputNameProduct, setInputNameProduct] = useState('');
    const [inputQuantity, setInputQuantity] = useState(0);

    const onChangeInputQuantity = (value) => {
        setInputQuantity(value);
    };

    const handleOk  = () =>  {
        if (props.products.find(item => item.nameProduct === inputNameProduct)) {
            const listProduct = props.products.map(item =>
                item.nameProduct === inputNameProduct
                    ? { ...item, quantity: item.quantity + inputQuantity }
                    : item
            );
            props.setProducts([...listProduct]);
        }
        clearInputs();
        props.setIsRegisterProductsOpen(false);
    };

    const handleCancel = () => {
        clearInputs();
        props.setIsRegisterProductsOpen(false);
    };

    const clearInputs = () => {
        setInputNameProduct('');
        setInputQuantity(0);
    }

    return (
        <Modal
            title="Register Quantity of Products"
            open={props.isRegisterProductsOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okText='Register'
        >
            <Input placeholder="Product Name" onChange={(e) => setInputNameProduct(e.target.value)}/>
            <br /><br />
            <InputNumber
                onChange={onChangeInputQuantity}
                placeholder="Quantity to Add"
                min={1}
                className='input-number-register-products'
            />
        </Modal>
    );
}

export default RegisterProduct;
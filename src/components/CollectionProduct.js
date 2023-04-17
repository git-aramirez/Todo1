import { productsData } from '../data/productsData';
import {  Button } from 'antd';

export const CollectionProduct = ({products, setProducts, total, setTotal
}) => {
    
    const onAddProduct = product => {
        if (products.find(item => item.id === product.id)) {
            const listProduct = products.map(item =>
                item.id === product.id
                    ? { ...item, quantityAdded: item.quantityAdded + 1 }
                    : item
            );
            console.log(product.price);
            setTotal(total + product.price);
            setProducts([...listProduct]);
        }
    };
    
    const isItDisable = product => {
        if(product.quantity <= product.quantityAdded){
            return true;
        }

        return false;
    }

    return (
        <div className='container-items'>
            {products.map(product => (
                <div className='item' key={product.id}>
                    <figure>
                        <img src={product.img} alt={product.nameProduct} />
                    </figure>
                    <div className='info-product'>
                        <h2>{product.nameProduct}</h2>
                        <p className='price'>${product.price}</p>
                        <p className='quantity'>{product.quantityAdded}</p>
                        <Button type="primary" onClick={() => onAddProduct(product)} disabled={isItDisable(product)}>
                            Add to cart
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};
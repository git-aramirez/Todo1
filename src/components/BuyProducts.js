import { Modal } from 'antd';

function BuyProducts(props) {

    const handleOk = async () => {
        const listProduct = props.products.map(item =>
            item.quantityAdded !== 0
                ? { ...item, quantityAdded: 0, quantity: (item.quantity - item.quantityAdded) }
                : item
        );
        props.setTotal(0);
        props.setProducts([...listProduct]);
        props.setIsBuyProductsOpen(false);
    };

    const handleCancel = () => {
        props.setIsBuyProductsOpen(false);
    };

    return (
        <Modal
            title="Buy Products"
            open={props.isBuyProductsOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okText='Buy'
        >
            <p>Total: $ {props.total}</p>
        </Modal>
    );
}

export default BuyProducts;
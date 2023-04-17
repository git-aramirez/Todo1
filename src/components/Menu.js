import { EditOutlined, MenuOutlined, PlusOutlined, UserAddOutlined, ShoppingCartOutlined , ClearOutlined} from '@ant-design/icons';
import { Dropdown, Space, Button, Row } from 'antd';

function Menu(props) {

    const items = [
        {
            key: 1,
            icon: <UserAddOutlined />,
            label: (<a onClick={() => props.setIsCreateUserOpen(true)}>Create User </a>
            ),
        },
        {
            key: 2,
            icon: <PlusOutlined />,
            label: (<a onClick={() => props.setIsCreateProductsOpen(true)}>Create Product</a>
            ),
        },
        ,
        {
            key: 3,
            icon: <EditOutlined />,
            label: (<a onClick={() => props.setIsRegisterProductsOpen(true)}>Register Product</a>
            ),
        },
    ];

    const isShoppingDisable = () => {
        if (props.products.find(item => item.quantityAdded !== 0)) {
            return false;
        }

        return true;
    }

    const onShoppingCart = () => {
        props.setIsBuyProductsOpen(true);
    }

    const onClearCart = () => {
        const listProduct = props.products.map(item =>
            item.quantityAdded !== 0
                ? { ...item, quantityAdded: 0 }
                : item
        );
        props.setTotal(0);
        props.setProducts([...listProduct]);
    }

    return (
        <div className='menu'>
            <Row justify='end'>
                <Button
                    icon={<ShoppingCartOutlined />}
                    disabled={isShoppingDisable()}
                    onClick={() => onShoppingCart()}
                    className="button-shopping"
                >

                </Button>

                <Button danger className="button-clear" icon={<ClearOutlined />} onClick={() => onClearCart()}>
                    Clear Cart
                </Button>

                <Dropdown menu={{ items, }}>
                    <a onClick={e => e.preventDefault()} >
                        <Space>
                            <MenuOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </Row>
        </div>
    );
}

export default Menu;
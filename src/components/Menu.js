import { EditOutlined , MenuOutlined, PlusOutlined, UserAddOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button , Row} from 'antd';

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

    return (
        <div className='menu'>
            <Row justify='space-between'>
                <Button icon={<ShoppingCartOutlined />} disabled={isShoppingDisable()}>

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
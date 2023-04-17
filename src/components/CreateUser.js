import { Modal, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import * as CryptoJS from 'crypto-js';

function CreateUser(props) {

    const [inputUserName, setInputUserName] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const handleOk = async () => {
        await props.setUsers([...props.users,
        {
            id: props.users.length + 1,
            userName: inputUserName,
            password: inputPassword
        },]);
        clearInputs();
        props.setIsCreateUserOpen(false);
    };

    const clearInputs = () => {
        setInputPassword('');
        setInputUserName('');
    }

    const handleCancel = () => {
        props.setIsCreateUserOpen(false);
    };

    function SubmitsEncry(password) {
        if (password != "") {
            const key = CryptoJS.enc.Utf8.parse("hf8685nfhfhjs9h8");
            const iv1 = CryptoJS.enc.Utf8.parse("hf8685nfhfhjs9h8");
            const encrypted = CryptoJS.AES.encrypt(password, key, {
                keySize: 16,
                iv: iv1,
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });

            setInputPassword(encrypted.toString());
        }
    }

    function SubmitsDecrypt(passwordEncrypted) {
        if (passwordEncrypted != '') {
            const key = CryptoJS.enc.Utf8.parse("hf8685nfhfhjs9h8");
            const iv1 = CryptoJS.enc.Utf8.parse("hf8685nfhfhjs9h8");
            const password = CryptoJS.AES.decrypt(passwordEncrypted, key, {
                keySize: 16,
                iv: iv1,
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });

            return password.toString(CryptoJS.enc.Utf8);
        }

        return "";
    }

    return (
        <Modal
            title="Create User"
            open={props.isCreateUserOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okText='Create'
        >
            <Input placeholder="Input Username" onChange={(e) => setInputUserName(e.target.value)} prefix={<UserOutlined />} />
            <br /> <br />
            <Input.Password
                placeholder="Input Password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onChange={(e) => SubmitsEncry(e.target.value)}
            />
        </Modal>
    );
}

export default CreateUser;
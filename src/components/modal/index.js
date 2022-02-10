import React, { useEffect } from 'react';
import { Modal } from 'antd';

const CSWModal = ({ title, visible, handleClose, ...props }) => {

    useEffect(() => {
        setTimeout(() => {
            console.log(this)
            handleClose(false)
        }, 2000)
    }, [])

    return (
        <Modal title={title} visible={visible} onOk={() => handleClose(true)} onCancel={() => handleClose(false)} {...props} />
    );
};

export default CSWModal;
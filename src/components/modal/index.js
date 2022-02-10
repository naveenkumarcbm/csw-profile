import React, { useEffect } from 'react';
import { Modal } from 'antd';

const CSWModal = ({ title, visible, handleClose, ...props }) => {

    useEffect(() => {
        if(visible){
            setTimeout(() => {
                handleClose(false)
            }, 3000)
        }
    }, [visible])

    return (
        <Modal title={title} visible={visible} onOk={() => handleClose(true)} onCancel={() => handleClose(false)} {...props} />
    );
};

export default CSWModal;
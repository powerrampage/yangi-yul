import { CloseOutlined } from "@ant-design/icons";
import { Modal as AntModal, Button, ModalProps } from "antd";

import classes from "./Modal.module.scss";

const Modal = ({ onCancel, children, title, ...props }: ModalProps = {}) => {
	return (
		<AntModal footer={false} {...props} onCancel={onCancel} title={false} className={classes.modal + ` ${props.className}`}>
			{props.closable !== false && (
				<>
					{/* @ts-ignore */}
					<Button shape="circle" size="small" danger onClick={onCancel} className={classes.close}>
						<CloseOutlined />
					</Button>
				</>
			)}
      {title && (
        <div className="size-24 lh12 bold text-center mb-20">{title}</div>
      )}
			{children}
		</AntModal>
	);
};

export default Modal;

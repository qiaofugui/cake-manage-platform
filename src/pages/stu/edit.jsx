import { Modal } from 'antd';

const Edit = (props) => {
  return (
    <>
      <Modal
        title={props.title}
        open={props.isModalOpen}
        onCancel={props.editCancel}
        width={props.width}
        footer={null}
      >
        {props.children}
      </Modal>
    </>
  );
};
export default Edit;

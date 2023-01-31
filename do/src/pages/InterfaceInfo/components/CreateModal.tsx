import {
  ModalForm, ProColumns,
  ProFormDateTimePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
  ProTable
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Modal } from 'antd';
import React from 'react';
// import InterfaceInfo = API.InterfaceInfo;



export type Props = {
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: ( ) => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  visible: boolean;
};

const CreateModal: React.FC<Props> = (props) => {
  const { columns, visible, onCancel, onSubmit } = props;
  return <Modal visible={ visible } onCancel={() => onCancel?.() }>
    <ProTable type="form" columns={columns} onSubmit={async (value) =>{
      onSubmit?.(value)
    }
    }/>
  </Modal>


};

export default CreateModal;

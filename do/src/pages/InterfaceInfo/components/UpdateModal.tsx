import {
  ModalForm, ProColumns,
  ProFormDateTimePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
  ProTable, ProFormInstance
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Modal } from 'antd';
import React, {useEffect, useRef} from 'react';
import {values} from "lodash";
import {ProFormInstanceType} from "@ant-design/pro-utils";
// import InterfaceInfo = API.InterfaceInfo;



export type Props = {
  values: API.InterfaceInfo;
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: ( ) => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  visible: boolean;
};

const UpdateModal: React.FC<Props> = (props) => {
  const { values, columns, visible, onCancel, onSubmit } = props;

  const formRef = useRef<ProFormInstance>();

  useEffect(()=>{
    if (formRef) {
      formRef.current?.setFieldsValue(values);
    }
  },[values])
  return <Modal visible={ visible } footer={null} onCancel={() => onCancel?.() }>
    <ProTable
      type="form"
      formRef={formRef}
      columns={columns}
      form={{
        initialValues: values
      }
      }
      onSubmit={async (value) =>{
      onSubmit?.(value)
    }
    }/>
  </Modal>


};

export default UpdateModal;

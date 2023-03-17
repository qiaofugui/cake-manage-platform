import React from 'react';
import { Button, Form, Input, Space, Spin, message } from 'antd';
import { roleAdd } from '@/api/user';
import { useRequest } from 'umi';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
export default function RoleManager() {
  const [form] = Form.useForm();
  const { data, loading, error, run } = useRequest(
    (values) =>
      roleAdd(values).then((res) => {
        message.success('添加成功');
        onReset();
      }),
    {
      manual: true, // 手动执行
    },
  );
  const onFinish = (values) => {
    run(values);
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div style={{ padding: 20 }}>
      <Spin spinning={loading}>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="rolename"
            label="角色名称"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="rolecode"
            label="角色代号"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button htmlType="button" onClick={onReset}>
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
}

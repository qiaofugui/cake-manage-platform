import React from 'react';
import { Button, Form, Input, Space, Spin, message, Select } from 'antd';
import { roleGet, userReg } from '@/api/user';
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
export default function UserManager() {
  const { data: roleList, loading: roleLoading } = useRequest(roleGet);

  const [form] = Form.useForm();
  const { data, loading, error, run } = useRequest(
    (values) =>
      userReg(values).then((res) => {
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
            name="username"
            label="账号"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="password" />
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
            <Select
              placeholder="请选择账号角色"
              // onChange={handleChange}
            >
              {roleList?.map((item) => (
                <Select.Option key={item.objectId} value={item.rolecode}>
                  {item.rolename}
                </Select.Option>
              ))}
            </Select>
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

import React from 'react';
import { Button, Form, Input, Space, Spin, message } from 'antd';
import { bannerAdd } from '@/api/coke';
import { useRequest } from 'umi';
import ImgUpload from '@/components/imgUpload';

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
export default function BannerPub() {
  const [form] = Form.useForm();
  const { data, loading, error, run } = useRequest(
    (values) =>
      bannerAdd(values).then((res) => {
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
            name="bannername"
            label="活动名称"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="bannerlink"
            label="活动链接"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="bannerimg"
            label="活动图片"
            rules={[
              {
                required: true,
              },
            ]}
          >
            {/* <Input /> */}
            <ImgUpload />
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

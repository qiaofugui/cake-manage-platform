import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { useState } from 'react';
import Cloud from 'leancloud-storage';

const getBase64 = (img, callback) => {
  // 将本地资源图片转化为 base64 编码
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('只能上传 JPG/PNG 文件!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图像必须小于 2MB！');
  }
  return isJpgOrPng && isLt2M;
};

const ImgUpload = (props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  // const handleChange = (info) => { // 检测 action 接口的上传进度
  //   if (info.file.status === 'uploading') {
  //     setLoading(true);
  //     return;
  //   }
  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, (url) => {
  //       setLoading(false);
  //       setImageUrl(url);
  //     });
  //   }
  // };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const customUpload = (info) => {
    // 自定义上传函数
    // info.file 可以提取本地图片资源对象
    setLoading(true);
    getBase64(info.file, (base64) => {
      // 将本地资源转化为可以向 leancloud 平台提交的
      const file = new Cloud.File('cateimg.png', { base64 });
      // 上传图片资源
      file.save().then((res) => {
        // 将图片链接传给父级
        props.onChange(res.attributes.url);
        // 本地预览在线图片
        setImageUrl(res.attributes.url);
      });
      setLoading(false);
    });
  };
  return (
    <div style={{ overflow: 'hidden' }}>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        customRequest={customUpload}
        beforeUpload={beforeUpload}
        // onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </div>
  );
};
export default ImgUpload;

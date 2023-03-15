import '@wangeditor/editor/dist/css/style.css'; // 引入 css

import React, { useState, useEffect } from 'react';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';

import Cloud from 'leancloud-storage';

function MyEditor(props) {
  const getBase64 = (img, callback) => {
    // 将本地资源图片转化为 base64 编码
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  // editor 实例
  const [editor, setEditor] = useState(null);

  // 编辑器内容
  const [html, setHtml] = useState('');

  // 模拟 ajax 请求，异步设置 html
  // useEffect(() => {
  //   setTimeout(() => {
  //     setHtml('<p>hello world</p>')
  //   }, 1500)
  // }, [])

  // 工具栏配置
  const toolbarConfig = {};

  // 编辑器配置
  const editorConfig = {
    MENU_CONF: {},
  };
  // 自定义上传图片
  editorConfig.MENU_CONF['uploadImage'] = {
    // 自定义上传
    async customUpload(file, insertFn) {
      getBase64(file, (base64) => {
        // 将本地资源转化为可以向 leancloud 平台提交的
        const file = new Cloud.File('goodsimg.png', { base64 });
        // 上传图片资源
        file.save().then((res) => {
          insertFn(res.attributes.url);
        });
      });

      // file 即选中的文件
      // 自己实现上传，并得到图片 url alt href
      // 最后插入图片
      // insertFn(url, alt, href)
    },
  };

  // editor change
  editorConfig.onChange = (editor) => {
    // 去除所有的html标记
    if (editor.getHtml().replace(/<[^>]+>|[&nbsp;]|\s/g, '').length === 0)
      return;
    props.onChange(editor.getHtml());
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <>
      <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="default"
          style={{ height: '350px', overflowY: 'hidden' }}
        />
      </div>
    </>
  );
}

export default MyEditor;

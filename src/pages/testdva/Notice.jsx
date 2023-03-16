import { Avatar, List, Skeleton, Button } from 'antd';
import { connect } from 'umi';

const Notice = (props) => {
  return (
    <div style={{ padding: '0 10px' }}>
      <List
        itemLayout="horizontal"
        dataSource={props.notice.list}
        renderItem={(item, i) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                size="small"
                disabled={item.read}
                onClick={() => {
                  props.dispatch({
                    type: 'notice/readOk',
                    payload: i,
                  });
                }}
              >
                {item.read ? '已经阅读' : '尚未阅读'}
              </Button>,
            ]}
          >
            <Skeleton avatar title={false} loading={false} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture} />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.description}
              />
              <div>{item.content}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notice: state.notice,
  };
};
export default connect(mapStateToProps)(Notice);

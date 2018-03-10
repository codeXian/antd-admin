import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import { Icon } from 'antd';

const links = [{
  key: '帮助',
  title: '帮助',
  href: '',
}, {
  key: 'github',
  title: <Icon type="github" />,
  href: 'https://github.com/codexian',
  blankTarget: true,
}, {
  key: '条款',
  title: '条款',
  href: '',
  blankTarget: true,
}];

const copyright = <div>Copyright <Icon type="copyright" /> 2018 codexian出品</div>;

export default () => (
  <div style={{ background: '#f5f5f5', overflow: 'hidden' }}>
    <GlobalFooter links={links} copyright={copyright} />
  </div>
)

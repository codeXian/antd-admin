import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from "antd";
import { Link } from "dva/router";
import styles from "./index.less";

const { Sider } = Layout;
const { SubMenu } = Menu;

const getIcon = icon => <Icon type={icon} />

class SiderMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  getMenuItemPath = item => {
    const icon = getIcon(item.icon);
    const { name } = item;
    return (
      <Link
        to={item.path}
        replace={item.path === this.props.location.pathname}
      >
        {icon}
        <span>{name}</span>
      </Link>
    )
  }

  getSubMenuOrItem = item => {
    if (item.children && item.children.some(child => child.name)) {
      const childrenItems = this.getMenuNavItems(item.children);
      // 当无子菜单的时候不显示菜单
      if (childrenItems && childrenItems.length > 0) {
        return (
          <SubMenu
            title={
              item.icon ? (
                <span>
                  {getIcon(item.icon)}
                  <span>{item.name}</span>
                </span>
              ) : (item.name)
            }
            key={item.path}
          >
            {childrenItems}
          </SubMenu>
        )
      }
    } else {
      return (
        <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>
      )
    }
  }

  getMenuNavItems = (menuData) => {
    if (!menuData) {
      return [];
    }
    return menuData.map(item => this.getSubMenuOrItem(item))
  }

  render() {
    const { menuData, logo } = this.props;

    return (
      <Sider width={256}
        className={styles.SiderMenu}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        breakpoint='lg'>
        <div className={styles.logo} key="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <h1>Ant Design Pro</h1>
          </Link>
        </div>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          {this.getMenuNavItems(menuData)}
        </Menu>
      </Sider>
    );
  }
}

export default SiderMenu;

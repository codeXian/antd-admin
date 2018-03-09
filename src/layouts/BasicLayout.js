import React, { PureComponent } from 'react';
import { Layout } from "antd";
import SiderMenu from "../components/SiderMenu";

const { Header, Content, Footer } = Layout;

class BasicLayout extends PureComponent {
  render() {
    const layout = (
      <Layout>
        <SiderMenu />
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
    return (
      <div>
        {layout}
      </div>
    );
  }
}

export default BasicLayout;

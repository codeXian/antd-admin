import React, { PureComponent } from 'react';
import { Layout } from "antd";
import DocumentTitle from 'react-document-title';
import classNames from 'classnames';
import { ContainerQuery } from 'react-container-query';
import { Switch, Redirect, Route } from "dva/router";
import SiderMenu from "../components/SiderMenu";
import NotFound from "../routes/Exception/404";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import { getMenuData } from "../common/menu";
import Authorized from "../utils/Authorized";
import { getRoutes } from '../utils/utils';
import logo from '../assets/logo.svg';

const { Header, Content, Footer } = Layout;
const { AuthorizedRoute } = Authorized;

/**
 * 根据菜单取得重定向地址.
 */
const redirectData = [];
const getRedirect = (item) => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `${item.path}`,
        to: `${item.children[0].path}`,
      });
      item.children.forEach((children) => {
        getRedirect(children);
      });
    }
  }
};

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

getMenuData().forEach(getRedirect);

class BasicLayout extends PureComponent {
  getBashRedirect = () => {
    // According to the url parameter to redirect
    // 这里是重定向的,重定向到 url 的 redirect 参数所示地址
    const urlParams = new URL(window.location.href);
    const redirect = urlParams.searchParams.get('redirect');
    // Remove the parameters in the url
    if (redirect) {
      urlParams.searchParams.delete('redirect');
      window.history.replaceState(null, 'redirect', urlParams.href);
    } else {
      return '/form/basic-form';
    }
    return redirect;
  }
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = 'Ant Design Pro';
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - Ant Design Pro`;
    }
    return title;
  }
  render() {
    const { location, match, routerData } = this.props;

    const layout = (
      <Layout>
        <SiderMenu
          menuData={getMenuData()}
          location={location}
          logo={logo}
        />
        <Layout>
          <Header style={{ padding: 0 }}>
            <GlobalHeader />
          </Header>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
              {
                redirectData.map(item =>
                  <Redirect key={item.from} exact from={item.from} to={item.to} />
                )
              }
              {
                getRoutes(match.path, routerData).map(item => (
                  <AuthorizedRoute
                    key={item.key}
                    path={item.path}
                    component={item.component}
                    exact={item.exact}
                  />
                ))
              }
              <Redirect exact from="/" to={this.getBashRedirect()} />
              <Route render={NotFound} />
            </Switch>
          </Content>
          <Footer>
            <GlobalFooter></GlobalFooter>
          </Footer>
        </Layout>
      </Layout>
    )
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}

export default BasicLayout;

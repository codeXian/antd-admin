import "@babel/polyfill";
import dva from 'dva';
import createLoading from 'dva-loading';
import './index.less';
import 'ant-design-pro/dist/ant-design-pro.css'; // 统一引入样式

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/global').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

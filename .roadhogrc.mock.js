
import { getFakeList } from './mock/api';
import { delay } from 'roadhog-api-doc';

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';
console.log(noProxy);

const proxy = {
  'GET /api/fake_list': getFakeList,
}

export default noProxy ? {} :delay(proxy, 1000)

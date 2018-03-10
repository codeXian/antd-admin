import { queryFakeList } from '../services/api';

export default {

  namespace: 'list',

  state: {
    list: []
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const response = yield call(queryFakeList)
      yield put({
          type: 'queryList',
          payload: Array.isArray(response.data.list) ? response.data.list : []
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload
      }
    }
  },

};

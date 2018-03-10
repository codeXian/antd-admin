import Mock from 'mockjs';

const getFakeList = Mock.mock({
  "list|4": [
    {
      "key|+1": 1,
      "name": '@name',
      "age|1-100": 1,
      "address": '@city'
    }
  ]
})

export default {
  getFakeList
}

const menuData = [ // 一级菜单, 二级菜单, 三件菜单
  {
    name: '表单页',
    icon: 'form',
    path: 'form',
    children: [{
      name: '基础表单',
      path: 'basic-form'
    }, {
      name: '分布表单',
      path: 'step-form'
    }]
  },
  {
    name: '列表页',
    icon: 'table',
    path: 'list',
    children: [{
      name: '查询表格',
      path: 'table-list',
    }, {
      name: '标准列表',
      path: 'basic-list',
    }, {
      name: '卡片列表',
      path: 'card-list',
    }, {
      name: '搜索列表',
      path: 'search',
      children: [{
        name: '搜索列表（文章）',
        path: 'articles',
      }, {
        name: '搜索列表（项目）',
        path: 'projects',
      }, {
        name: '搜索列表（应用）',
        path: 'applications',
      }],
    }]
  },
  {
    name: 'jquery插件篇',
    icon: 'jquery',
    path: 'jquery',
    children: [{
      name: 'swipper',
      path: 'swipper'
    }, {
      name: 'xxx',
      path: 'xxx'
    }]
  },
  {
    name: '成功结果页',
    icon: 'check-circle-o',
    path: 'success'
  }
]

const formatter = (data, parentPath = '/') => {
  return data.map(item => {
    let { path } = item;
    path = parentPath + item.path
    const result = {
      ...item,
      path
    }
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`)
    }
    return result
  })
}

export const getMenuData = () => formatter(menuData);

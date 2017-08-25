// 该文件用于管理在 /page/user 文件夹中,需要存在store中的所有状态
import USER from './../../mutation-types';

const state = {
  // TODO 初始化数据
  list: [
    { name: '小红', sex: '女', address: '北京市朝阳区芍药居', id: 1 },
    { name: '小明', sex: '男', address: '上海市浦东新区世纪大道', id: 2 },
    { name: '小黑', sex: '男', address: '深圳市南山区深南大道', id: 3 },
    { name: '自己', sex: '男', address: '深圳市南山区深南大道', self: 'X', id: 4 },
  ],
};

const getters = {
  // TODO 获得list数据
  list: state => state.list,
};

const actions = {
  // TODO 通过commit发送给mutations进行同步数据
  userlist({ commit }, list) {
    commit(USER, list);
  },
};

const mutations = {
  [USER](state, list) {
    // TODO 如果数据的id不等于-1 则是修改
    if (list.userId !== -1) {
      state.list.map((item) => {
        if (Number(item.id) === Number(list.userId)) {
          Object.assign(item, list.list);
        }
        return true;
      });
    } else {
      // TODO 否则的话就新增一个对象到列表
      const obj = {
        name: list.list.name,
        sex: list.list.sex,
        address: list.list.address,
        id: new Date().getTime(),
      };
      state.list.push(obj);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

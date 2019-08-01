const state = () => ({
  list: ['北京', '上海']
})

const mutations = () => ({
  addOne(state, item) {
    state.list.push(item)
  },
  addMore(state, items) {
    state.list.concat(items)
  },
  clear(state) {
    state.list = []
  }
})

const actions = () => ({
  initList(cxt, data) {
    cxt.commit('clear')
    cxt.commit('addMore', data)
  }
})

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
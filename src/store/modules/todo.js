const initialState = () => ({
  list: ['Drink more protein'],
});

export default {
  state: initialState,
  actions: {
    addToList({ commit }, value) {
      commit('ADD_TO_LIST', value);
    },
  },
  mutations: {
    ADD_TO_LIST: (state, value) => {
      state.list.push(value);
    },
  },
};

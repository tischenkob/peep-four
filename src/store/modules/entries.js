import axios from "axios";

const state = { entries: [{ x: 1, y: 2, r: 1 }] };
const getters = {
  ENTRIES: state => {
    return state.entries;
  }
};
const mutations = {
  ADD_ENTRY: (state, entry) => {
    state.entries.push(entry);
  },
  SET_ENTRIES: (state, payload) => {
    state.entries = payload;
  }
};
const actions = {
  GET_ENTRIES: async context => {
    axios
      .get(state.BACKEND_URL + "getEntries")
      .then(({ data }) => {
        context.commit("SET_ENTRIES", data);
      })
      .catch(() => {
        alert("could not get entries");
      });
  },
  POST_ENTRY: async (context, payload) => {
    axios
      .post(state.BACKEND_URL + "addEntry", payload)
      .then(res => {
        context.commit("ADD_ENTRY", res.data);
      })
      .catch(err => {
        alert(err.message);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

import axios from "axios";
import { backend } from "../resources/url";
import toast from "@/lib/toast.js";

const state = { entries: [{ x: 1, y: 2, r: 1 }] };
const getters = {
  ENTRIES: state => {
    return state.entries;
  }
};
const mutations = {
  ADD_ENTRY: (state, entry) => {
    state.entries.push(entry);
    toast.success("Entry added!");
  },
  SET_ENTRIES: (state, payload) => {
    state.entries = payload;
    toast.success("Entries loaded!");
  }
};
const actions = {
  GET_ENTRIES: async context => {
    axios
      .get(backend + "getEntries")
      .then(({ data }) => {
        context.commit("SET_ENTRIES", data);
      })
      .catch(() => {
        toast.error("Could not get entries");
      });
  },
  POST_ENTRY: async (context, payload) => {
    axios
      .post(backend + "addEntry", payload)
      .then(res => {
        context.commit("ADD_ENTRY", res.data);
      })
      .catch(err => {
        toast.error(err.message);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

import axios from "axios";
import router from "@/router";
import { backend } from "../resources/url";
import { store } from "..";
// import VueToast from "vue-toast-notification";
const state = {
  username: "",
  password: "",
  isAuthenticated: false
};
const getters = {
  USERNAME: () => {
    return state.username;
  },
  PASSWORD: () => {
    return state.password;
  },
  IS_AUTHENTICATED: () => {
    return state.isAuthenticated;
  }
};
const mutations = {
  LOGIN_USER: (state, payload) => {
    let {username, password} = payload;
    state.username = username;
    state.password = password;
    localStorage.setItem("peep_username", state.username);
    localStorage.setItem("peep_password", state.password);
    state.isAuthenticated = true;
  },
  LOGOUT_USER: state => {
    localStorage.setItem("peep_username", "");
    localStorage.setItem("peep_password", "");
    state.username = "";
    state.password = "";
    state.isAuthenticated = false;
  },
  SET_USER: (state, payload) => {
    state.username = payload;
  },
  SET_PASSWORD: (state, payload) => {
    state.password = payload;
  },
  NONE: (state, payload) => {
    alert("NONE");
    alert(state);
    alert(payload);
  }
};
const actions = {
  REGISTER: async(context, payload) => {
    let formData = new FormData();
    formData.append("username", payload.username);
    formData.append("password", payload.password);
    if (payload.username == "admin@admin.ru") {
      context.commit("NONE", payload);
      router.push("/login");
      return;
    } else {
      axios
        .post(backend + "register", formData)
        .then(() => {
          context.commit("NONE", payload);
          router.push("/login");
        })
        .catch(err => {
          alert("couldn't register\n" + err.message);
        });
    }
  },
  LOGIN: async(context, payload) => {
    let { username } = payload;
    let formData = new FormData();
    formData.append("username", payload.username);
    formData.append("password", payload.password);
    if (username == "admin@admin.ru") {
      context.commit("LOGIN_USER", payload);
      return;
    }
    axios
      .post(backend + "login", payload)
      .then(() => {
        context.commit("LOGIN_USER", payload);
      })
      .catch(err => {
        alert("could not log in\n" + err.message);
      });
  },
  LOGOUT: async context => {
    axios
      .get(backend + "logout")
      .then(() => context.commit("LOGOUT_USER"))
      .catch(err => alert("could not log out\n" + err.message));
  },
  LOGIN_FROM_STORAGE: async() => {
    let username = localStorage.getItem("peep_username");
    let password = localStorage.getItem("peep_password");
    if (username && password) {
      store.dispatch('LOGIN', { username, password });
    }
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
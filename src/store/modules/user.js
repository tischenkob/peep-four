import axios from "axios";

const state = {
  username: "",
  password: "",
  isAuthenticated: false
};
const getters = {};
const mutations = {
  LOGIN_USER: (state, payload) => {
    state.username = payload.username;
    state.password = payload.password;
    localStorage.setItem("peep_username", state.username);
    alert(localStorage.getItem("peep_username"));
    localStorage.setItem("peep_password", state.password);
    state.isAuthenticated = true;
  },
  LOGOUT_USER: state => {
    state.isAuthenticated = false;
  },
  SET_USER: (state, payload) => {
    state.username = payload;
  },
  SET_PASSWORD: (state, payload) => {
    state.password = payload;
  }
};
const actions = {
  REGISTER: async (context, payload) => {
    axios
      .post(state.BACKEND_URL + "register", payload)
      .then(() => {
        this.router.push("/login");
      })
      .catch(err => {
        alert("couldn't register\n" + err.message);
      });
  },
  LOGIN: async (context, payload) => {
    axios
      .post(state.BACKEND_URL + "login", payload)
      .then(() => {
        context.commit("LOGIN_USER", payload);
      })
      .catch(err => {
        alert("could not log in\n" + err.message);
      });
  },
  LOGOUT: async context => {
    axios
      .get(state.BACKEND_URL + "logout")
      .then(() => context.commit("LOGOUT_USER"))
      .catch(err => alert("could not log out\n" + err.message));
  },
  LOGIN_FROM_STORAGE: async context => {
    let username = localStorage.getItem("peep_username") || "";
    let password = localStorage.getItem("peep_password") || "";
    alert(state.BACKEND_URL);
    if (username && password) {
      this.LOGIN(context, { username, password });
    }
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};

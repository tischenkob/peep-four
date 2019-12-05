import api from "@/service/api.js";
import router from "@/router";
import store from "../index.js";
import toast from "@/lib/toast.js";

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
    let { username, password, token } = payload;
    state.username = username;
    state.password = password;
    window.localStorage.currentUser = JSON.stringify({
      username,
      password,
      token
    });
    state.isAuthenticated = true;
    debugger;
    router.push("/main");
  },
  LOGOUT_USER: state => {
    window.localStorage.currentUser = null;
    state.username = "";
    state.password = "";
    state.isAuthenticated = false;
    toast.info("Logged out!");
  },
  SET_USER: (state, payload) => {
    state.username = payload;
  },
  SET_PASSWORD: (state, payload) => {
    state.password = payload;
  }
};
const actions = {
  REGISTER: async (_context, payload) => {
    let formData = new FormData();
    formData.append("username", payload.username);
    formData.append("password", payload.password);
    api()
      .post("/register", formData)
      .then(() => {
        toast.success("Successfully registered!");
        toast.info("Now you should  log in");
        router.push("/login");
      })
      .catch(err => {
        toast.error("Couldn't register: " + err.message);
      });
  },
  LOGIN: async (context, payload) => {
    let { username } = payload;
    let formData = new FormData();
    formData.append("username", payload.username);
    formData.append("password", payload.password);
    debugger;
    if (username == "admin@admin.ru") {
      context.commit("LOGIN_USER", payload);
      return;
    }
    api()
      .post("/login", payload)
      .then(() => {
        toast.success("Successfully logged in!");
        context.commit("LOGIN_USER", payload);
      })
      .catch(err => {
        toast.error("Could not log in:" + err.message);
      });
  },
  LOGOUT: async context => {
    if (context.getters.USERNAME == "admin@admin.ru") {
      context.commit("LOGOUT_USER");
      return;
    }
    api()
      .get("/logout")
      .then(() => context.commit("LOGOUT_USER"))
      .catch(err => toast.error("Could not log out:" + err.message));
  },
  LOGIN_FROM_STORAGE: async () => {
    let user = JSON.parse(window.localStorage.currentUser);
    debugger;
    if (user) {
      store.dispatch("LOGIN", user);
    }
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};

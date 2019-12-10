import axios from "axios";

export default (includeAuth) => {

  let request = {
    baseURL: "/api",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }
  if (includeAuth) {
    let currentUserString = window.localStorage.currentUser;
    let currentUser = currentUserString ? JSON.parse(currentUserString) : "";
    request.headers.Authorization = currentUser && currentUser.token;
  }
  return axios.create(request);
};

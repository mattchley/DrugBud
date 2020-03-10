import axios from "axios";

//methods for interacting with API Auth routes
export default {
  login: userData => axios.post("/auth/login", userData),
  signUp: userData => axios.post("/auth/signup", userData),
  dashboard: token =>
    axios.get("/api/dashboard", {
      headers: { Authorization: `bearer ${token}` }
    }),
  getDrugsConflict: (queryRes, token) =>
    axios.get(
      `https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${queryRes}`,
      { headers: { Authorization: `bearer ${token}` } }
    ),
  getDrugsID: (search, token) =>
    axios.get(`https://rxnav.nlm.nih.gov/REST/rxcui?name=${search}`, {
      headers: { Authorization: `bearer ${token}` }
    }),
  saveDrug: (drugDetails, token) =>
    axios.post("/api/drugs", drugDetails, {
      headers: { Authorization: `bearer ${token}` }
    })
};

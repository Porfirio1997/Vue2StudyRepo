import axios from "axios";

import Vue from "vue";
import Vuex from "vuex";

// const store = createStore({
Vue.use(Vuex);
export default new Vuex.Store({
  state() {
    return {
      persons: [],
    };
  },
  getters: {
    persons(state) {
      return state.persons.map((el) => {
        let objectDate = new Date(el.datebirth);
        let day = objectDate.getDate();
        let month = objectDate.getMonth();
        console.log(month + 1); // 8
        let year = objectDate.getFullYear();
        console.log(year); // 2022
        el.datebirth = `${month}/${day}/${year}`;
        return el;
      });
    },
  },
  mutations: {
    setPersons(state, persons) {
      state.persons = persons;
    },
    addPerson(state, person) {
      state.persons = [...state.persons, person];
    },
    updatePerson(state, person) {
      state.persons.filter((el, index) => {
        if (person.id == el.id) {
          state.persons.splice(index, 1);
        }
      });
      this.addPerson(person);
    },
  },
  actions: {
    fetchPersons({ commit }) {
      axios
        .get("/api/person")
        .then((result) => commit("setpersons", result.data))
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status + "-" + error.response.data);
          }
        });
    },
    sendPerson({ commit }, person) {
      axios
        .post("/api/person", person)
        .then((result) => commit("addpersons", result.data))
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status + "-" + error.response.data);
          }
        });
    },
    deletePerson(person) {
      axios
        .delete("/api/person/" + person.id)
        .then((result) => {
          return result.data;
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status + "-" + error.response.data);
          }
        });
    },
    updatePerson({ commit }, person) {
      axios
        .put("/api/person/" + person.id, person)
        .then((result) => commit("updatePerson", result.data))
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status + "-" + error.response.data);
          }
        });
    },
  },
});

// export default store;

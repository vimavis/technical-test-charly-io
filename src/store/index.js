import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companies: [
      { id: 1, status: "accepted", name: "001", date: "01/01/2022" },
      { id: 2, status: "accepted", name: "001", date: "01/01/2022" },
      { id: 8, status: "accepted", name: "001", date: "10/04/2022" },
      { id: 4, status: "declined", name: "005", date: "01/02/2022" },
      { id: 7, status: "pending", name: "005", date: "03/02/2022" },
      { id: 3, status: "pending", name: "001", date: "01/02/2022" },
      { id: 9, status: "pending", name: "002", date: "11/04/2022" },
      { id: 5, status: "declined", name: "002", date: "02/02/2022" },
      { id: 6, status: "declined", name: "001", date: "02/02/2022" },
    ],
  },
  getters: {
    getCompanies: state => filtro => {
      if (filtro === 'all') {
        return state.companies
      } else {
        return state.companies.filter(company => company.status === filtro)
      }
    }
  },
  mutations: {
  },
  actions: {
    fetchCompanies({ state }, url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          state.companies = data
        })
        .catch(error => {
          console.log(error)
          console.info('Show default data')
        })
    }
  },
  modules: {
  }
})

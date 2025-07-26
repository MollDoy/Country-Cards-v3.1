export default {
    namespaced: true,
    state: {
        countries: [
            {id: 1, name: "russia"},
            {id: 2, name: "usa"},
            {id: 3, name: "japan"}
        ],
        nextId: 4,
    },
    actions: {
        addCountry({commit}, country) {
            if (!country) {return}
            commit("addCountry", country);
        },
        removeCountry({commit}, id) {
            commit("removeCountry", id)
        }
    },
    mutations: {
        addCountry(state, country) {
            state.countries.push({id: state.nextId++, name: country.toLowerCase()});
        },
        removeCountry(state, id) {
            state.countries = state.countries.filter(country => country.id !== id);
        }
    }
}
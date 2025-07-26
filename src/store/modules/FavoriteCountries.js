export default {
    namespaced: true,
    state: {
        // creating a second array instead of creating a favorite boolean flag to get rid from duplicate favorite cards
        favoriteCountries: ["russia"],
    },
    actions: {
        changeCountryFavoriteState ({state, getters, commit}, country) {
            country = country.toLowerCase()
             if (getters.isCountryFavorite(country)) {
                commit("removeCountryFromFavorites", country)
             } else {
                commit("addCountryToFavorites", country)
             }
        }
    },
    getters: {
        isCountryFavorite(state) {
            //return state.favoriteCountries.find(c => c.id === country.id)
            return (country) => {
                country = country.toLowerCase()
                return state.favoriteCountries.find(c => c === country)
            }
        }
    },
    mutations: {
        removeCountryFromFavorites(state, country) {
            state.favoriteCountries = state.favoriteCountries.filter(c => c !== country)
        },
        addCountryToFavorites(state, country) {
            state.favoriteCountries.push(country)
        }
    }
}
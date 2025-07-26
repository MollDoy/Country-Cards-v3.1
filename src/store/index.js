import {createStore} from "vuex"

import Countries from "@/store/modules/Countries.js"
import FavoriteCountries from "@/store/modules/FavoriteCountries.js"

const store = createStore({
    modules: {
        Countries,
        FavoriteCountries
    },
})

export default store
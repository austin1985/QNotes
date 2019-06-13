import axios from 'axios'

const state = {
    profile: {},
    notes: []

}

const getters = {
    allNotes: (state) => state.todos
    
}

const actions = { 
    async fetchNotes({commit}) {
        const response = await axios(`http://172.31.6.5:7115/notebooks/${this.$config.notes.notebook_id}/notes`)

        commit('setNotes',response.data)
    },
    async addNotes({commit}, notebook, note) {
        const response = await axios.post(`http://172.31.6.5:7115/notebooks/${this.$config.notes.notebook_id}/notes`, {...note})
        
        commit('newNotes',response.data)
    }
}

const mutations = {
    setNotes: (state, notes) => (state.notes = notes),
    newNotes: (state, note) => state.notes.unshift(note)
}

export default {
    state,
    getters,
    actions,
    mutations
}
const state = () => ({
    navVisible: false
  })

  const getters = {
      navVisible:state =>{
          return state.navVisible
      }
  }

  const mutations = {
    setnavVisible(state, visible) {
      state.navVisible = visible
    }
}
  
    const actions = {
       showNavList ({ commit },visible) {
         commit('setnavVisible',visible)
        }
      }
   
  
  
  export default {
    state,
    getters,
    actions,
    mutations
  }
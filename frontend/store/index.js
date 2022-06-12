export const state=()=>({
    skills:[],
    interests: [],
    userId: ""
})

export const mutations = {
    ADD_SKILL(state,skill){
         state.skills=[skill,... state.skills];
     },
     ADD_INTEREST(state,interest){
        state.interests=[interest,... state.interests];
    },
     STORE_USER_ID(state, id) {
        localStorage.setItem('userId', id)
        console.log(id)
     }
 }


 export const getters = {
    getSkill(state) {
        return state.skills
    },
    getId(state) {
        if(typeof window === 'undefined') {
            return 
        }
        return {
            ...state,
            userId:localStorage.getItem('userId')
        }
    }
 }
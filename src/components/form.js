//import Vue from 'vue';
export default{
    namespaced:true,
    state:{
        modelForm:{},
        stateMethod:{}
    },
    mutations:{
        mutModel(state,modelActions){
            state.modelForm=modelActions;
        },
        mutMethod(state,methodActions){
            state.stateMethod=methodActions;
        }
    },
    actions:{
        modelActions({commit},schema){
            const data=schema;
            commit('mutModel',data)
        },
        methodActions({commit},method){
            const data=method;
            commit('mutMethod',data);

        }   

    }
}
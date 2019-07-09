export default {
    addFun(context){
        context.commit('add',{})
    },
    reduceFun(context,n){
        context.commit('reduce',n)
    }
}
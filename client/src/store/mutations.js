export default {
    //如果第二参数要是定义了，那么页面的commit也要传过来
    add(state,{}){
        state.count = state.count + 1
    },
    reduce(state,n){
        state.num = state.num - n
    }
}
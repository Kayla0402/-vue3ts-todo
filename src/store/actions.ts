// actions 作用：调用mutations中的方法通过commit
import {SET_TODO, SET_TODO_LIST} from "@/store/actionType";
import {Commit} from "vuex";
import {IState, ITodo} from "@/typings";

interface ICtx {
    commit: Commit,
    state: IState
}
export default {
    // [SET_TODO](ctx, todo) {} ctx可以解构出来commit，和state
    [SET_TODO]({ commit, state }: ICtx, todo: ITodo): void {
        commit(SET_TODO, todo)
    },
    [SET_TODO_LIST]({ commit }: ICtx, todoList: ITodo[]): void {
        commit(SET_TODO_LIST, todoList)
    }
}
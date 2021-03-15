import {SET_TODO, SET_TODO_LIST} from "@/store/actionType";
import {IState, ITodo} from "@/typings";

export default {
    [SET_TODO](state: IState, todo: ITodo):void {
        state.list.unshift(todo)
        console.log(state.list);
    },
    [SET_TODO_LIST](state: IState, todoList: ITodo[]): void {
        state.list = todoList
    }
}
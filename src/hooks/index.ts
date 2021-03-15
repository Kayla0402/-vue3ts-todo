import {ITodo, TODO_STATUS} from "@/typings";
import {SET_TODO, SET_TODO_LIST} from "@/store/actionType";
import {Store, useStore} from "vuex";

export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: () => void;
    setStatus: () => void;
    setDoing: () => void;
}
function useTodo():IUseTodo {
    const store: Store<any> = useStore()
    const { setLocalList, getLocalList }: IUserLocalStorage = useLocalStorage()

    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }
        // 通过dispatch去派发,store为userStore（），store的类型为唯一使用到的any类型
        store.dispatch(SET_TODO, todo)
        setLocalList(store.state.list)
    }

    const todoList:ITodo[] = getLocalList()
    function setTodoList() {
        store.dispatch(SET_TODO_LIST, todoList)
        console.log(todoList);
    }
    function removeTodo() {

    }
    function setStatus() {

    }
    function setDoing() {

    }

    return {
        setTodo, // 新增
        setTodoList, // 刷新时从localstorage获取数据
        removeTodo, // 移除
        setStatus, // 更改状态
        setDoing // 正在做
    }
}

interface IUserLocalStorage {
    getLocalList: () => ITodo[],
    setLocalList: (todoList: ITodo[])=> void
}
function useLocalStorage(): IUserLocalStorage {
    function getLocalList(): ITodo[] {
        return JSON.parse(localStorage.getItem('todoList' ) || '[]')
    }
    function setLocalList(todoList: ITodo[]):void {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }
    return {
        getLocalList, setLocalList
    }
}

export {
    useTodo
}
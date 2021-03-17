import {ITodo, TODO_STATUS} from "@/typings";
import {SET_TODO, SET_TODO_LIST,REMOVE_TODO,SET_STATUS,SET_DOING} from "@/store/actionType";
import {Store, useStore} from "vuex";
import {watch} from 'vue'


export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: (id: number) => void;
    setStatus: (id: number) => void;
    setDoing: (id: number) => void;
}
function useTodo():IUseTodo {
    const store: Store<any> = useStore()
    const { setLocalList, getLocalList }: IUserLocalStorage = useLocalStorage()
    const todoList:ITodo[] = getLocalList()

    /*
    * 监听每次list的变化，每次变化的时候重新存储到本地storage中
    * watch有两个回调函数，第一个返回要监听的数据，第二个处理相关的逻辑
    * */
    watch(() => {
        return store.state.list;
    }, (todoList) => {
        setLocalList(todoList)
    })

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

    function setTodoList() {
        store.dispatch(SET_TODO_LIST, todoList)
    }
    function removeTodo(id:number) {
        store.dispatch(REMOVE_TODO,id)
        // setLocalList(store.state.list)
    }
    function setStatus(id:number) {
        store.dispatch(SET_STATUS,id)
        // setLocalList(store.state.list)
    }
    function setDoing(id:number) {
        store.dispatch(SET_DOING,id)
        // setLocalList(store.state.list)
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
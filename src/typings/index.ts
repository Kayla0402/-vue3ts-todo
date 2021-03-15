/**
 * 一般定义对象可以使用接口（interface）或者类型( type ),但是一般使用接口，因为接口可以继承（extends）
 * 接口一般以 I 开头， ； 结尾，
 * 枚举： 当一个变量有几个固定值时使用枚举，枚举一般 ，结尾
 */
interface ITodo {
    id: number;
    content: string;
    status: TODO_STATUS
}

interface IState {
    list: ITodo[]
}

enum TODO_STATUS {
    WILLDO= 'willdo',
    DOING = 'doing',
    FINISHED = 'finished'
}
// 也可以通过type导出去
export {
    ITodo, IState, TODO_STATUS
}
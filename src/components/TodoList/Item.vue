<template>
  <div>
    <input type="checkbox" :checked="item.status === FINISHED"
           @click="setStatus(item.id)">
    <span :class="item.status === FINISHED? 'line-through': ''">
    {{ item.content }}
    </span>
    <button @click='removeTodo(item.id)'>删除</button>
    <button @click='setDoing(item.id)'
    :class="item.status === DOING? 'doing': 'willdo'">{{ item.status === DOING ? '正在做' : '马上做' }}</button>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {ITodo, TODO_STATUS} from "@/typings";
interface IStatusState {
  DOING: TODO_STATUS;
  WILLDO: TODO_STATUS;
  FINISHED: TODO_STATUS;
}
export default defineComponent ({
  name: "TodoItem",
  props: {
    item: Object as PropType<ITodo>
  },
  setup(props, { emit }) {
    // 注意此时statusState没有用ref或者reactive包裹，不是响应式的，这里没有必要是响应式的，是一些静态的值
    // const statusState = <IStatusState> { // 泛型的方式
    const statusState: IStatusState = {
      DOING: TODO_STATUS.DOING,
      WILLDO: TODO_STATUS.WILLDO,
      FINISHED: TODO_STATUS.FINISHED
    }

    const removeTodo = (id: number) => {
      emit('removeTodo', id)
    }
    const setDoing = (id: number) => {
      emit('setDoing', id)
    }
    const setStatus = (id: number) => {
      emit('setStatus', id)
    }

    return {
      ...statusState,
      removeTodo,
      setDoing,
      setStatus
    }
  }
})
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
.doing {
  background-color: #cdcdcd;
  color: #333;
}
.willdo {
  background-color: orange;
  color: #fff;
}
</style>
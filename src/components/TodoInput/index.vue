<template>
  <div>
    <input type="text" v-model="todoVal" @keyup="setTodoVal">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {IUseTodo, useTodo} from '@/hooks/index'
/*
 vue3中双向数据绑定，ref（单个数据），reactive（对象等多个复杂数据绑定）
 ref 数据的更改，数据后加.value
 */
export default defineComponent ({
  name: "TodoInput",
  setup () {
    const todoVal = ref<string>('');
    const { setTodo }: IUseTodo = useTodo()
    /**
     * setTodoval可以不用设置数据类型，后边的函数到void之前已经很明确了，直接用类型推导就可以了
     */
    const setTodoVal = (e: KeyboardEvent) :void => {
      if(e.keyCode === 13 && todoVal.value.trim().length) {
        // 设置数据(保存在store中，store的工作流)，清空input框
        setTodo(todoVal.value)
        todoVal.value = ''
      }
    }

    return {
      todoVal, setTodoVal
    }
  }
})
</script>

<style scoped>

</style>
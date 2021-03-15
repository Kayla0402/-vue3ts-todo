<template>
  <div id="nav">
    app container
    <todo-input/>
    <todo-list />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
/**
 * 使用ts，lang=‘ts', export default {} 改为 export default defineComponent ({})
 */
import TodoInput from "@/components/TodoInput";
import TodoList from '@/components/TodoList'
import {IUseTodo, useTodo} from "@/hooks";

export default defineComponent ({
  name: 'App',
  components: {
    TodoInput, TodoList
  },
  setup() {
    const { setTodoList }: IUseTodo = useTodo()

    onMounted(() => {
      setTodoList()
    })
  }
})
</script>
<style lang="scss">
</style>

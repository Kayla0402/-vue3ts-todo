<template>
  <div id="nav">
    app container
    <todo-input/>
    <todo-list :todoList="todoList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
/**
 * 使用ts，lang=‘ts', export default {} 改为 export default defineComponent ({})
 */
import TodoInput from "@/components/TodoInput/index.vue";
import TodoList from '@/components/TodoList/index.vue'
import {IUseTodo, useTodo} from "@/hooks";
import {Store, useStore} from "vuex";

export default defineComponent ({
  name: 'App',
  components: {
    TodoInput, TodoList
  },
  setup() {
    const { setTodoList }: IUseTodo = useTodo()
    const store: Store<any> = useStore()

    onMounted(() => {
      setTodoList()
    })

    return {
      todoList: computed(() => store.state.list)
    }
  }
})
</script>
<style lang="scss">
</style>

<template>
  <todo-item v-for="item of todoList" :key="item.id" :item="item"
  @removeTodo="removeTodo" @setStatus="setStatus" @setDoing="setDoing"/>
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType} from 'vue'
import TodoItem from './Item.vue'
import {ITodo} from "@/typings";
import {IUseTodo, useTodo} from "@/hooks";
export default defineComponent ({
  name: "TodoList",
  props: {
    // 如果要对todoList进行类型定义的话，光写array是不够的，要通过propType断言，PropType必须要用通过vue引入进来
    todoList: Array as PropType<ITodo[]>
  },
  components: {
    TodoItem
  },
  setup(props) {
    onMounted(() => {
      console.log(props.todoList);
    })
    const {
      removeTodo, setStatus, setDoing
    }: IUseTodo = useTodo()
    return {
      removeTodo, setStatus, setDoing
    }
  }
})
</script>

<style scoped>

</style>
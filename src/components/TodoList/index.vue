<template>
  <todo-item v-for="item of todoList" :key="item.id" :item="item"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoItem from './Item'
export default defineComponent ({
  name: "TodoList",
  components: {
    TodoItem
  }
})
</script>

<style scoped>

</style>
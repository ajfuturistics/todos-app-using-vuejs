<script setup>
import { ref } from "vue";
import { useTodosStore } from "../store/todos";

const todoTitle = ref("");

const { addTodo } = useTodosStore();

const handleAddTodo = () => {
  if (todoTitle.value.trim() === "") return;
  addTodo(todoTitle.value);
  todoTitle.value = "";
};
</script>

<template>
  <v-container
    class="d-flex flex-column justify-center align-center"
    style="gap: 0.5rem"
  >
    <v-text-field
      v-model="todoTitle"
      label="Enter todo"
      variant="outlined"
      class="w-100"
    ></v-text-field>
    <v-btn variant="outlined" @click="handleAddTodo"> Add Todo </v-btn>
  </v-container>
</template>

<style lang="scss" scoped></style>

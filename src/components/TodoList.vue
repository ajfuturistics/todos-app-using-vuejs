<script setup>
import { useTodosStore } from "../store/todos";
import { storeToRefs } from "pinia";

const store = useTodosStore();

const { filteredTodos } = storeToRefs(store); // for reactive data
const { toggleTodo, removeTodo } = store; // for non reactive
</script>

<template>
  <v-container
    class="d-flex flex-wrap justify-center align-center w-100"
    style="gap: 0.5rem"
  >
    <v-card
      v-for="todo in filteredTodos"
      :key="todo.id"
      :title="todo.title"
      :text="`Status: ${todo.isCompleted ? 'Completed' : 'Pending'}`"
      variant="outlined"
    >
      <v-card-actions>
        <v-btn variant="tonal" @click="() => toggleTodo(todo.id)">
          Toggle
        </v-btn>
        <v-btn
          size="small"
          color="#dc2626"
          icon="mdi-delete"
          variant="tonal"
          @click="() => removeTodo(todo.id)"
        >
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped></style>

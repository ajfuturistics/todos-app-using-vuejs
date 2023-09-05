<script setup>
import { ref } from "vue";
import { useTodosStore } from "../store/todos";
import { storeToRefs } from "pinia";

const todoTitle = ref("");

const store = useTodosStore();

const { todos, filteredTodos } = storeToRefs(store); // for reactive data
const { addTodo, toggleTodo, removeTodo, updateFilter } = store; // for non reactive

const handleAddTodo = () => {
  if (todoTitle.value.trim() === "") return;
  addTodo(todoTitle.value);
  todoTitle.value = "";
};
</script>

<template>
  <main>
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

    <v-container
      v-if="todos.length > 0"
      class="d-flex justify-center align-center"
      style="gap: 0.5rem"
    >
      <v-btn variant="tonal" @click="() => updateFilter('all')"> All </v-btn>
      <v-btn variant="tonal" @click="() => updateFilter('pending')">
        Pending
      </v-btn>
      <v-btn variant="tonal" @click="() => updateFilter('completed')">
        Completed
      </v-btn>
    </v-container>

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
  </main>
</template>

<style scoped></style>

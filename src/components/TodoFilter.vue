<script setup>
import { useTodosStore } from "../store/todos";
import { storeToRefs } from "pinia";

const store = useTodosStore();

const { todos } = storeToRefs(store); // for reactive data
const { updateFilter } = store; // for non reactive
</script>

<template>
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
</template>

<style scoped></style>

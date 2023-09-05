import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [
      {
        id: 1,
        title: "Coding",
        isCompleted: false,
      },
    ],
    filter: "all",
  }),

  getters: {
    filteredTodos() {
      if (this.filter === "pending") {
        return this.todos.filter((todo) => !todo.isCompleted);
      } else if (this.filter === "completed") {
        return this.todos.filter((todo) => todo.isCompleted);
      } else {
        return this.todos;
      }
    },
  },

  actions: {
    addTodo(text) {
      if (!text) return;

      this.todos.push({
        id: Math.floor(Math.random() * 10000000000),
        title: text,
        isCompleted: false,
      });
    },

    toggleTodo(id) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      this.todos[index].isCompleted = !this.todos[index].isCompleted;
    },

    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    updateFilter(value) {
      this.filter = value;
    },
  },
});

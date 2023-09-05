<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <h3>PiniaTodo</h3>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  background: #e6e4e4;
  height: 4rem;
}

h3 {
  font-size: 16px;
  font-weight: 600;
  cursor: default;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: underline;
}
</style>

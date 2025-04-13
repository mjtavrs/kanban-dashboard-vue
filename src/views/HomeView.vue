<script setup>
import { PhReadCvLogo, PhGithubLogo } from '@phosphor-icons/vue'
</script>

<template>
  <div class="home-container">
    <div class="home-header">
      <h1>Kanban Board</h1>
      <p>A simple Kanban Board made with Vue.js</p>
    </div>
    <div class="home-links">
      <div class="home-external-links">
        <a href="https://en.wikipedia.org/wiki/Kanban" target="_blank">
          <PhReadCvLogo :size="25" />
          Read more about Kanban here
        </a>
        <a href="https://github.com/mjtavrs/kanban-dashboard-vue" target="_blank">
          <PhGithubLogo :size="25" />
          Visit the project repository
        </a>
      </div>
      <router-link to="/configure">Configure your Kanban Board</router-link>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 100vh;
  justify-content: center;

  .home-header {
    align-items: center;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 6rem;
    }

    p {
      font-size: 1.75rem;
    }
  }

  .home-links {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .home-external-links {
      display: flex;
      gap: 2rem;

      a {
        align-items: center;
        display: flex;
        gap: 0.5rem;
      }
    }

  }
}
</style>

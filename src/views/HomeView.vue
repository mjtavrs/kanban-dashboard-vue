<script setup>
import { PhReadCvLogo, PhGithubLogo, PhGridNine } from '@phosphor-icons/vue'
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
          <PhReadCvLogo :size="30" color="white" />
          Read more about Kanban here
        </a>
        <a href="https://github.com/mjtavrs/kanban-dashboard-vue" target="_blank">
          <PhGithubLogo :size="30" color="white" />
          Visit the project repository
        </a>
      </div>
      <router-link to="/board" id="configure-link">
        <PhGridNine :size="35" />
        Get started with your Kanban Board!
      </router-link>
    </div>
    <footer>
      <p>Coded with a lot of ☕ by <a href="https://github.com/mjtavrs" target="_blank">Marcos Tavares</a></p>
      <p>Version 1.0 &copy; 2025</p>
    </footer>
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
    gap: 2.5rem;

    .home-external-links {
      display: flex;
      gap: 1.5rem;

      a {
        align-items: center;
        background-color: #1f1f1f;
        border-radius: 10px;
        color: #f6f6f6;
        display: flex;
        gap: 0.5rem;
        padding-block: 0.8rem;
        padding-inline: 1.2rem;
        text-decoration: none;
        transition: transform 300ms, box-shadow 300ms;

        &:hover {
          -webkit-box-shadow: 0px 0px 20px 1px rgba(48,48,48,0.35);
          -moz-box-shadow: 0px 0px 20px 1px rgba(48,48,48,0.35);
          box-shadow: 0px 0px 20px 1px rgba(48,48,48,0.35);
          transform: rotate(-3deg);
        }

        &:last-child:hover {
          transform: rotate(3deg);
        }
      }
    }

    #configure-link {
      align-items: center;
      background-color: #fff;
      border: 2px solid #1f1f1f;
      border-radius: 10px;
      color: #1f1f1f;
      display: flex;
      font-size: 1.2rem;
      gap: 0.5rem;
      padding-block: 0.8rem;
      padding-inline: 1.2rem;
      text-decoration: none;
      transition: box-shadow 300ms;

      &:hover {
          -webkit-box-shadow: 0px 0px 20px 1px rgba(48,48,48,0.20);
          -moz-box-shadow: 0px 0px 20px 1px rgba(48,48,48,0.20);
          box-shadow: 0px 0px 20px 1px rgba(48,48,48,0.20);
      }
    }
  }

  footer {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    p {
      a {
        font-weight: 700;
        text-decoration: none;
      }
    }
  }
}
</style>

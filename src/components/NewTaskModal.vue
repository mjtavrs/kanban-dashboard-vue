<script setup>
import { ref } from 'vue'
import { useKanbanStore } from '../store/kanban';

const emit = defineEmits(['close'])

const title = ref('')
const kanban = useKanbanStore()

function close() {
    emit('close')
}

function createTask() {
    if (!title.value) return

    kanban.addTask({
        title: title.value,
        columnName: 'New'
    })

    title.value = ''
    close()
}
</script>

<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal">
      <h2>New task</h2>
      <form @submit.prevent="createTask">
        <label>Task title:</label>
        <input v-model="title" required placeholder="Type the name of the task" />

        <div class="actions">
          <button type="submit">Create task</button>
          <button type="button" @click="close">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  align-items: center;
  /* To reduce even more the board with the blur effect */
  background-color: rgba(31, 31, 31, 0.45);
  backdrop-filter: blur(5px);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 9999;

  .modal {
    background-color: #f6f6f6;
    border-radius: 10px;
    max-width: 26.25rem;
    padding: 2rem;
    width: 90%;
  
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        font-weight: 500;
      }

      input {
        border-radius: 8px;
        font-size: 1rem;
        padding: 0.8rem;
      }

      .actions {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
        margin-top: 0.5rem;

        button {
          background-color: #1f1f1f;
          border: none;
          border-radius: 8px;
          color: #f6f6f6;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.6rem 1.2rem;
          transition: background-color 300ms;

          &:hover {
            background-color: #444;
          }
        }

        button + button {
          background-color: firebrick;
          transition: background-color 300ms;

          &:hover {
            background-color: indianred;
          }
        }
      }
    }
  }
}
</style>
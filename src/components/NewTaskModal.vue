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
    <div class="modal-container" @click.self="close">
        <div class="modal">
            <h2>Create a new task</h2>
            <form @submit.prevent="createTask">
                <label>Task title</label>
                <input v-model="title" placeholder="Type the title of the task" required />

                <div class="actions">
                    <button type="submit">Create</button>
                    <button type="button" @click="close">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  font-family: 'Patrick Hand', cursive;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
</style>
<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useKanbanStore } from '../store/kanban'

const router = useRouter()
const kanban = useKanbanStore()

const columnCount = ref(0)
const columns = ref([])

watch(columnCount, (selectedNumberOfColumns) => {
  if (selectedNumberOfColumns > 0 && selectedNumberOfColumns <= 5) {
    columns.value = Array.from({ length: selectedNumberOfColumns }, () => ({
      name: '',
      color: ''
    }))
  }
})

function handleSubmit() {
  const isValid = columns.value.every(column => column.name && column.color)
  if (isValid) {
    kanban.configureColumns(columns.value)
    router.push('/board')
  } else {
    alert('Fill the columns correctly!')
  }
}
</script>

<template>
    <div class="columns-config-container">
      <h2 id="columns-config-container-header">
        Let's configure your Kanban Board!
      </h2>
  
      <form @submit.prevent="handleSubmit">
        <label for="columnCount">Number of columns (You can have up to 5 columns):</label>
        <input
          type="number"
          id="columnCount"
          v-model.number="columnCount"
          min="1"
          max="5"
          required
        />
  
        <div class="column-setup" v-if="columnCount > 0">
          <div
            v-for="(col, index) in columnCount"
            :key="index"
            class="column-config"
          >
            <label>Title of the column {{ index + 1 }}:</label>
            <input v-model="columns[index].name" placeholder="Ex: Backlog, To Do, In Progress..." required />
  
            <label>Color:</label>
            <select v-model="columns[index].color" required>
              <option value="">Choose</option>
              <option value="yellow">Yellow</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="pink">Pink</option>
              <option value="orange">Orange</option>
            </select>
          </div>
        </div>
  
        <button type="submit">Create board</button>
      </form>
    </div>
</template>

<style scoped>
  .columns-config-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 10px #ccc;
    font-family: 'Patrick Hand', cursive;

    #columns-config-container-header {
      font-size: 1.75rem;
    }

    form {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 1rem;
  
      > label {
        font-size: 1.25rem;
      }

      .column-setup {
        width: 100%;
    
        .column-config {
          border: 1px dashed #ccc;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          margin-top: 1rem;
          padding: 1rem;
    
          > input, > select {
            margin-block: 0.5rem;
          }
    
          > select {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding-inline: 1rem;
            padding-block: 0.5rem;
          }
        }
      }
    
      button {
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 1.1rem;
        padding-block: 1rem;
        padding-inline: 1.2rem;
      }
    }
  }
</style>

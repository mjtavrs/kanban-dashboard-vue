<script setup>
import { ref } from 'vue'
import { useKanbanStore } from '../store/kanban'
import { PhCheckSquareOffset } from '@phosphor-icons/vue'
import KanbanColumn from '../components/KanbanColumn.vue'

const kanban = useKanbanStore()

function tasksByColumn(name) {
    return kanban.tasks.filter(task => task.columnName === name)
}
</script>

<template>
    <div class="board-container">
        <header>
            <h1>Kanban Board</h1>
            <button>
                <PhCheckSquareOffset :size="30" />
                Add new task
            </button>
        </header>

        <main>
            <KanbanColumn 
                v-for="column in kanban.columns"
                :key="column.name"
                :column="column"
                :tasks="tasksByColumn(column.name)"
            />
        </main>
    </div>
</template>

<style scoped>
.board-container {
    padding: 2rem;
    font-family: 'Patrick Hand', cursive;
    width: 100%;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    
        h1 {
    
        }
    
        button {
    
        }
    }
    
    main {
        /* display: flex;
        gap: 1rem;
        flex-wrap: wrap; */
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }
}

</style>

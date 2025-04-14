<script setup>
import { ref } from 'vue'
import { useKanbanStore } from '../store/kanban'
import { PhCheckSquareOffset, PhTrash } from '@phosphor-icons/vue'
import KanbanColumn from '../components/KanbanColumn.vue'
import NewTaskModal from '../components/NewTaskModal.vue'

const kanban = useKanbanStore()
const showNewTaskModal = ref(false)

function tasksByColumn(name) {
    return kanban.tasks.filter(task => task.columnName === name)
}
</script>

<template>
    <div class="board-container">
        <header>
            <h1>Kanban Board</h1>
            <div>
                <button @click="showNewTaskModal = true">
                    <PhCheckSquareOffset :size="30" color="white" />
                    Add new task
                </button>
                <button @click="kanban.clearTasks">
                    <PhTrash :size="30" color="white" weight="fill" />
                    Remove all tasks
                </button>
            </div>
        </header>

        <main>
            <KanbanColumn v-for="column in kanban.columns" :key="column.name" :column="column"
                :tasks="tasksByColumn(column.name)" />
        </main>

        <NewTaskModal v-if="showNewTaskModal" @close="showNewTaskModal = false" />
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
            font-size: 3rem;
        }

        div {
            display: flex;
            gap: 0.5rem;
            button {
                align-items: center;
                background-color: #1f1f1f;
                border: none;
                border-radius: 10px;
                color: #f6f6f6;
                display: flex;
                font-size: 1rem;
                gap: 0.8rem;
                padding-block: 0.6rem;
                padding-inline: 1.2rem;
                transition: box-shadow 200ms;
    
                &:hover {
                    -webkit-box-shadow: 0px 0px 20px 1px rgba(48, 48, 48, 0.15);
                    -moz-box-shadow: 0px 0px 20px 1px rgba(48, 48, 48, 0.15);
                    box-shadow: 0px 0px 20px 1px rgba(48, 48, 48, 0.15);
                }
            }

            button + button {
                background-color: firebrick;
                border: none;
            }
        }

    }
    
    main {
        display: grid;
        gap: 0.5rem;
        grid-template-columns: repeat(5, 1fr);
    }
}

</style>

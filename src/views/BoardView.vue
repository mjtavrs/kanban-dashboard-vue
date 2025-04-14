<script setup>
import { ref } from 'vue'
import { useKanbanStore } from '../store/kanban'
import { PhCheckSquareOffset, PhTrash } from '@phosphor-icons/vue'
import { Tippy } from 'vue-tippy'
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
                <span class="tooltip-wrapper">
                    <Tippy v-if="kanban.columnTaskCount('New') >= 6"
                        content="You cannot add more than 6 tasks per column." theme="light-border"
                        placement="left-start">
                        <button disabled>
                            <PhCheckSquareOffset :size="30" color="white" />
                            Add new task
                        </button>
                    </Tippy>

                    <button v-else @click="showNewTaskModal = true">
                        <PhCheckSquareOffset :size="30" color="white" />
                        Add new task
                    </button>
                </span>
                <button @click="kanban.clearTasks" id="clear-button">
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
                padding: 0.6rem 1.2rem;
                transition: background-color 300ms; 
    
                &:hover {
                    background-color: #444;
                }

                &:disabled {
                    cursor: not-allowed;
                    opacity: 0.5;
                }
            }

            #clear-button {
                background-color: firebrick;
                transition: background-color 300ms;
                
                &:hover {
                    background-color: indianred;
                }
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

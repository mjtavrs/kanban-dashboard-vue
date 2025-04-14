<script setup>
import { onMounted, ref } from 'vue'
import Sortable from 'sortablejs'
import { useKanbanStore } from '../store/kanban'
import { PhQuestionMark } from '@phosphor-icons/vue'
import KanbanPostIt from './KanbanPostIt.vue'

const props = defineProps({
    column: Object,
    tasks: Array
})

const taskList = ref([])
const kanban = useKanbanStore()

onMounted(() => {
    Sortable.create(taskList.value, {
        group: 'tasks',
        animation: 150,
        onAdd(event) {
            const taskId = Number(event.item.dataset.id)
            kanban.moveTask(taskId, props.column.name)
        }
    })
})
</script>

<template>
    <div class="kanban-column">
        <div class="kanban-column-header" :style="{ backgroundColor: column.color }" ref="container">
            <h2>{{ column.name }}</h2>
            <span v-tippy="{ content: column.description, placement: 'top', arrow: true, delay: 50, theme: 'light-border' }">
                <PhQuestionMark :size="20" weight="bold" />
            </span>
        </div>
        <div class="task-list" ref="taskList">
            <KanbanPostIt v-for="task in tasks" :key="task.id" :task="task" :columnColor="column.color" />
        </div>
    </div>
</template>

<style scoped>
.kanban-column {
    color: #333;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 11rem);
    
    .kanban-column-header {
        align-items: center;
        display: flex;
        justify-content: space-between;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 1rem;
        
        h2 {
            color: #f0f0f0;
            font-size: 1.25rem;
            font-weight: 500;
        }

        span {
            background-color: white;
            border-radius: 9999px;
            padding: 0.5rem;
            line-height: 0;
        }
    }
    
    .task-list {
        background-color: white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        height: 100%;
        padding-block: 0.3rem;
    }
}
</style>
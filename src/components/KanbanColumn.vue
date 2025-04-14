<script setup>
import { onMounted, ref } from 'vue'
import Sortable from 'sortablejs'
import { useKanbanStore } from '../store/kanban'
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
        </div>
        <div class="task-list" ref="taskList">
            <KanbanPostIt
                v-for="task in tasks"
                :key="task.id"
                :task="task"
            />
        </div>
    </div>
</template>

<style scoped>
.kanban-column {
    border: 1px solid red;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    .kanban-column-header {
        padding: 1rem;

        h2 {
            margin-top: 0;
        }
    }
    
    .task-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>
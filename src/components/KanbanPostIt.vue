<script setup>
import { useKanbanStore } from '../store/kanban'

const props = defineProps({
    task: Object
})

const kanban = useKanbanStore()

function getShadedColor(columnName) {
    const column = kanban.columns.find(col => col.name === columnName)
    if (!column) return '#f0f0f0'

    const base = column.color

    const shades = {
        yellow: '#fff9c4',
        blue: '#cce5ff',
        green: '#d0f0c0',
        pink: '#fcd6e5',
        orange: '#ffe0b2'
    }

    return shades[base] || '#f0f0f0'
}
</script>

<template>
    <div class="post-it" :data-id="task.id" :style="{ backgroundColor: getShadedColor(task.columnName) }">
        <p>{{ task.title }}</p>
    </div>
</template>

<style scoped>
.post-it {
    border-radius: 5px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
    font-family: 'Patrick Hand', cursive;
    padding: 1rem;
    transition: transform 100ms;
}

.post-it:hover {
    transform: scale(1.1);
}
</style>
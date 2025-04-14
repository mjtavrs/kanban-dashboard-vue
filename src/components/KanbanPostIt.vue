<script setup>
import { useKanbanStore } from '../store/kanban'

const props = defineProps({
    task: Object,
    columnColor: String
})

const kanban = useKanbanStore()
</script>

<template>
    <div class="post-it" :data-id="task.id" :style="{ borderLeft: `5px solid ${columnColor}` }">
        <p>{{ task.title }}</p>
    </div>
</template>

<style scoped>
.post-it {
    background-color: #f7f7f7;
    font-size: 1rem;
    font-family: 'Patrick Hand', cursive;
    padding-block: 1rem;
    padding-inline: 0.5rem;
}

.post-it:hover {
    cursor: grab;
}
</style>
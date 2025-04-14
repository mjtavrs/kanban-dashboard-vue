<script setup>
import { useKanbanStore } from '../store/kanban'
import { PhX, PhNotePencil } from '@phosphor-icons/vue'

const props = defineProps({
    task: Object,
    columnColor: String
})

const kanban = useKanbanStore()
</script>

<template>
    <div class="post-it" :data-id="task.id" :style="{ borderLeft: `5px solid ${columnColor}` }">
        <div class="post-it-header">
            <p>{{ task.title }}</p>
            <div class="post-it-header-actions">
                <!-- Bellow still editing -->
                <span
                    v-tippy="{ content: 'Edit task', placement: 'top', arrow: true, delay: 50, theme: 'light-border' }"
                    @click="kanban.editTask(task.id)">
                    <PhNotePencil :size="20" />
                </span>
                <!-- Above still editing -->
                <span
                    v-tippy="{ content: 'Remove task', placement: 'top', arrow: true, delay: 50, theme: 'light-border' }"
                    @click="kanban.removeTask(task.id)">
                    <PhX :size="20" />
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.post-it {
    background-color: #f7f7f7;
    font-size: 1rem;
    padding-block: 1rem;
    padding-inline: 0.5rem;

    &:hover {
        cursor: grab;
    }

    .post-it-header {
        align-items: center;
        display: flex;
        justify-content: space-between;

        .post-it-header-actions {
            display: flex;
            gap: 0.5rem;
        }
    }
}

</style>
<script setup>
import { ref } from 'vue'
import { useKanbanStore } from '../store/kanban'
import { PhX, PhNotePencil } from '@phosphor-icons/vue'

const props = defineProps({
    task: Object,
    columnColor: String
})

const editing = ref(false)
const newTitle = ref(props.task.title)

const kanban = useKanbanStore()

function startEditing() {
    editing.value = true
    newTitle.value = props.task.title
}

function saveTitle() {
    if (newTitle.value.trim()) {
        kanban.editTask(props.task.id, newTitle.value.trim())
        editing.value = false
    }
}
</script>

<template>
    <div class="post-it" :data-id="task.id" :style="{ borderLeft: `5px solid ${columnColor}` }">
        <div class="post-it-header">
            <div class="post-it-header-title">
                <template v-if="editing">
                    <input v-model="newTitle" @keyup.enter="saveTitle" @blur="saveTitle" class="edit-input" />
                </template>
                <template v-else>
                    <p>{{ task.title }}</p>
                </template>
            </div>
            <div class="post-it-header-actions">
                <span
                    v-if="!editing" v-tippy="{ content: 'Edit task', placement: 'top', arrow: true, delay: 50, theme: 'light-border' }"
                    @click="startEditing">
                    <PhNotePencil :size="20" />
                </span>
                <span
                    v-tippy="{ content: 'Remove task', placement: 'top', arrow: true, delay: 50, theme: 'light-border' }"
                    @click="kanban.removeTask(task.id)">
                    <PhX :size="20" />
                </span>
            </div>
        </div>
        <div class="post-it-metadata">
            <p>Created on: {{ task.createdAt }}</p>
        </div>
    </div>
</template>

<style scoped>
.post-it {
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
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

        .post-it-header-title {
            font-size: 1.25rem;
            font-weight: 600;

            .edit-input {
                font-family: inherit;
                font-size: 1rem;
                padding: 0.25rem 0.5rem;
                border-radius: 6px;
                border: 1px solid #ccc;
                width: 100%;
            }
        }

        .post-it-header-actions {
            display: flex;
            gap: 0.5rem;
        }
    }
}

</style>
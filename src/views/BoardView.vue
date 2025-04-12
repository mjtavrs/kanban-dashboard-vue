<script setup>
import { ref } from 'vue'
import { useKanbanStore } from '../store/kanban'

const kanban = useKanbanStore()

function tasksByColumn(name) {
    return kanban.tasks.filter(task => task.columnName === name)
}
</script>

<template>
    <div>
        <header>
            <h1>Kanban Board</h1>
            <button>+ Add new task</button>
        </header>

        <main>
            
        </main>
    </div>
</template>

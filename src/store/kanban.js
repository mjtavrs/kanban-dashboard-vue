import { defineStore } from 'pinia'

export const useKanbanStore = defineStore('kanban', {
    state: () => ({
        columns: [],
        tasks: []
    }),
    actions: {
        configureColumns(columns) {
            this.columns = columns
        },
        addTask(task) {
            this.tasks.push({ ...task, id: Date.now() })
        },
        moveTask(taskId, newColumnName) {
            const task = this.tasks.find(task => task.id === taskId)
            if (task) task.columnName = newColumnName
        },
        clearTasks() {
            this.tasks = []
        },
        clearBoard() {
            this.columns = []
            this.tasks = []
        }
    },
    persist: true
})
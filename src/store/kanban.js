import { defineStore } from 'pinia'

export const useKanbanStore = defineStore('kanban', {
    state: () => ({
        columns: [
            { name: 'Backlog', color: 'gainsboro' },
            { name: 'To-do', color: 'darkorange' },
            { name: 'In Progress', color: 'lightblue' },
            { name: 'Testing', color: 'plum' },
            { name: 'Done', color: 'darkseagreen' }
        ],
        tasks: []
    }),
    actions: {
        addTask(task) {
            this.tasks.push({ ...task, id: Date.now() })
        },
        moveTask(taskId, newColumnName) {
            const task = this.tasks.find(task => task.id === taskId)
            if (task) task.columnName = newColumnName
        },
        clearTasks() {
            this.tasks = []
        }
    },
    persist: true
})
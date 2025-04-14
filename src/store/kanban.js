import { defineStore } from 'pinia'

export const useKanbanStore = defineStore('kanban', {
    state: () => ({
        columns: [
            { 
                name: 'New', 
                color: '#1371b0',
                description: 'List of tasks not yet planned.'
            },
            { 
                name: 'Planned', 
                color: '#99b370',
                description: 'Tasks already prioritized and ready to be worked on.'
            },
            { 
                name: 'Active', 
                color: '#7e9c4e',
                description: 'Tasks already in progress and being worked on.'
            },
            { 
                name: 'Resolution Submitted', 
                color: '#557522',
                description: 'Finished tasks that are ready for review.'
            },
            { 
                name: 'Complete', 
                color: '#1f1f1f',
                description: 'Finished and approved tasks.'
            }
        ],
        tasks: []
    }),
    actions: {
        addTask(task) {
            const taskCount = this.tasks.filter(t => t.columnName === task.columnName).length

            if (taskCount >= 6) {
                alert(`The column "${task.columnName}" reached the 6 tasks limit.`)
                return
            }

            const createdAt = new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })

            this.tasks.push({ ...task, id: Date.now(), createdAt })
        },
        moveTask(taskId, newColumnName) {
            const task = this.tasks.find(task => task.id === taskId)
            if (task) task.columnName = newColumnName
        },
        clearTasks() {
            this.tasks = []
        },
        removeTask(taskId) {
            this.tasks = this.tasks.filter(task => task.id !== taskId)
        },
        editTask(taskId, newTitle) {
            const task = this.tasks.find(task => task.id === taskId)
            if (task) task.title = newTitle
        }
    },
    getters: {
        tasksByColumn: (state) => (columnName) => {
            return state.tasks.filter(task => task.columnName === columnName)
        },
        columnTaskCount: (state) => (columnName) => {
            return state.tasks.filter(task => task.columnName === columnName).length
        }
    },
    persist: true
})
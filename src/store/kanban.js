import { defineStore } from 'pinia'

export const useKanbanStore = defineStore('kanban', {
    state: () => ({
        columns: [
            { 
                name: 'Backlog', 
                color: 'gainsboro',
                description: 'List of tasks not yet prioritized.'
            },
            { 
                name: 'To-do', 
                color: 'darkorange',
                description: 'Tasks already prioritized and ready to be worked on.'
            },
            { 
                name: 'In Progress', 
                color: 'lightblue',
                description: 'Tasks already in progress and being worked on.'
            },
            { 
                name: 'Testing', 
                color: 'plum',
                description: 'Finished tasks that are being tested.'
            },
            { 
                name: 'Done', 
                color: 'darkseagreen',
                description: 'Finish and approved tasks.'
            }
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
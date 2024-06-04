import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state: () => ({
      todos: [
        {
          isDone: false,
          text: 'Todo in Pinia Store!',
        },
      ],
    }),
    actions: {
        addTodo(todo) {
            console.log('Adding Todo:',todo);
            this.todos.push(todo)
            console.log('Current Todos:',this.todos)
    },
  },
});

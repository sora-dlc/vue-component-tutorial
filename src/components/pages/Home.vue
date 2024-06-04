<script>
import { defineComponent } from 'vue';
import TodoAdd from '@/components/components/TodoAdd.vue';
import TodoList from '@/components/components/TodoList.vue';
import { mapActions, mapStores } from 'pinia';
import { useTodosStore } from '../../stores/todos';


export default defineComponent({
    components: {
        TodoAdd,
        TodoList,
    },
    setup() {
        const todosStore = useTodosStore();

        const addNewTodo = (newTodoText) => {
            console.log('New Todo Text', newTodoText);
            if(!newTodoText) {
                alert('文字を入力してください');
                return;
            }
            todosStore.addTodo({
                isDone: false,
                text:newTodoText,
            });
            console.log('Updated Todos', todosStore.todos);
        };
        const clearDoneTodos = () => {
            todosStore.todos = todosStore.todos.filter((todo) => !todo.isDone);
            console.log('Remaining Todos:',todosStore.todos);
        };

        return {
            todosStore,
            addNewTodo,
            clearDoneTodos,
        };
    }
});
</script>

<template>
    <div>
        <TodoAdd @delete-done="clearDoneTodos" @add-todo="addNewTodo" />
        <p v-if="todosStore.todos.length === 0">ToDoがまだありません！</p>
        <TodoList v-else :todos="todosStore.todos" />
    </div>
</template>

<style>
.todo-done {
    text-decoration: line-through;
}
</style>
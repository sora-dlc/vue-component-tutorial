<script>
import MyButton from '@/components/basics/MyButton.vue'

export default {
    components: {
        MyButton,
    },
    data() {
        return {
            newTodoText:'',
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoText.trim() !== '') {
                this.$emit('add-todo', this.newTodoText);
                this.newTodoText = '';
            } else {
                alert('文字を入力してください');
            }
        },
        clearDoneTodos() {
            this.$emit('delete-done');
        },
    },
}
</script>


<template>
    <input type="text" v-model="newTodoText" />
    <MyButton @click="addTodo">追加<img src="@/assets/icon-plus.svg" height="10" /></MyButton>
    <MyButton @click="$emit('delete-done')">完了済みを削除する</MyButton>
</template>
  
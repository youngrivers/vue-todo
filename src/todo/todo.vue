<template>
    <section class="real-app">
        <input type="text" class="add-input" autofocus="autofocus" placeholder="接下去要做什么？" @keyup="addTodo">
        <Item :todo="todo" v-for="todo in fliteredTodos" :key='todo.id' @del="deleteTodo"></Item>
        <Tabs :filter="filter" :todos="todos" @toggle="toggleFilter" @clearAll=clearAllCompleted></Tabs>
    </section>
</template>

<script>
let id=0;
import Item from './item.vue'
import Tabs from './tabs.vue'
    export default{
        data(){
            return{
                todos:[],
                filter:'all'
            }
        },
        components:{
            Item,
            Tabs,
        },
        computed: {
            fliteredTodos(){
                if(this.filter==='all'){
                    return this.todos
                }
                const completed=this.filter==='completed'
                return this.todos.filter(todo=>completed===todo.completed)
            }
        },
        methods:{
            addTodo(e){
                if (e.target.value.trim()!='') {
                        
                    this.todos.unshift({
                        id:id++,
                        content:e.target.value.trim(),
                        completed:false
                    })
                    e.target.value=''
                }
            },
            deleteTodo(id){
                this.todos.splice(this.todos.findIndex(todo=>todo.id===id),1)
            },
            toggleFilter(state){
                this.filter=state
            },
            clearAllCompleted(){
                this.todos=this.todos.filter(todo=>!todo.completed)
            }
        }
    }
</script>

<style lang="css" scoped>
.real-app{
    width:600px;
    margin:0 auto;
    box-shadow:0 0 5px #666666;
}
.add-input{
    position:relative;
    margin:0;
    width:100%;
    font-size:24px;
    font-family:inherit ;
    font-weight :inherit ;
    line-height :1.4em;
    border: 0;
    outline: none ;
    color: inherit ;
    padding :6px;
    border: 1px solid #999999;
    box-shadow :inset 0 -1px 5px 0 #bfbfbf;
    box-sizing :border-box;
    font-smoothing: antialiased ;
    padding:16px 16px 16px 60px;
    border: none ;
    box-shadow :inset 0 -2px 1px #bfbfbf
}
</style>

<template>
    <div class="helper">
        <span class="left">2 item left</span>
        <span class="tabs">
            <span
            v-for="state in states"
            :key="state"
            :class="[state,filter===state?'active':'']"
            @click="toggleFilter(state)"
            >
                {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted">Clear Completed</span>
    </div>
</template>

<script>
    export default{
        props:{
            filters:{
                type:String,
                required:true,
            }
        },
        data(){
            return{
                state:['all','active','completed']
            }
        },
        methods:{
            clearAllCompleted(){},
            toggleFilter(){},
        }
    }
</script>
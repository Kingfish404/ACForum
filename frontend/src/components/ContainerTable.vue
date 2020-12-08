<template>
    <div>
        <ul>
            <hr/>
            <li v-for="topic in Topic" :key="topic" class="topics"> 
               {{topic.name}}
               <hr>
            </li>
        </ul>
    </div>
</template>


     
<script>
    export default {
        props:["Topic"],
        data() {
            return {

            }
        }
    }
</script>

<style>
.topics{
    height: 70px;
}
</style>
<template lang="html">
  <div>
    <sui-card-group  :items-per-row="this.$config.notes.itemsPerRow" >
        <Note v-for="note in notes" v-bind:note="note" :key="note.id"/>
    </sui-card-group>
   </div> 
</template>

<script>
import axios from 'axios'
import Note from './Note'

export default {
    name: "Notes",
    components: {
        Note
    },
    data() {
        return {
            notes:[]
        }
    }, 
    created() {
        console.log(this.$config.test)
        axios.get('http://172.31.6.5:7115/notebooks/123/notes').then(res => this.notes = res.data.collection)
    }
}
</script>

<style>

</style>
